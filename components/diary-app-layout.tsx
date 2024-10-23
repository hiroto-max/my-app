'use client'

import React, { useState } from 'react'
import { Menu, Calendar, Tag, Star, Sun, Moon, User, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function DiaryAppLayoutComponent() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(true)
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(true)

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode)
  const toggleLeftSidebar = () => setIsLeftSidebarOpen(!isLeftSidebarOpen)
  const toggleRightSidebar = () => setIsRightSidebarOpen(!isRightSidebarOpen)

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'dark bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
      {/* Header */}
      <header className="bg-primary text-primary-foreground p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Menu className="mr-2 md:hidden" onClick={toggleLeftSidebar} />
          <h1 className="text-xl font-bold">日記アプリ</h1>
        </div>
        <input type="date" className="bg-primary-foreground text-primary px-2 py-1 rounded" />
        <div className="flex items-center">
          <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <User className="ml-2" />
        </div>
      </header>

      {/* Main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left sidebar */}
        <aside className={`w-64 bg-secondary p-4 overflow-y-auto transition-all duration-300 ease-in-out ${isLeftSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static absolute inset-y-0 left-0 z-10`}>
          <Button variant="ghost" size="icon" className="absolute right-2 top-2 md:hidden" onClick={toggleLeftSidebar}>
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <nav className="space-y-4">
            <div>
              <h2 className="font-semibold mb-2">カレンダー</h2>
              <Calendar className="w-full h-48" />
            </div>
            <div>
              <h2 className="font-semibold mb-2">タグ一覧</h2>
              <ul className="space-y-1">
                <li className="flex items-center"><Tag className="mr-2" size={16} /> 仕事</li>
                <li className="flex items-center"><Tag className="mr-2" size={16} /> 家族</li>
                <li className="flex items-center"><Tag className="mr-2" size={16} /> 趣味</li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold mb-2">お気に入り</h2>
              <ul className="space-y-1">
                <li className="flex items-center"><Star className="mr-2" size={16} /> 思い出の日</li>
                <li className="flex items-center"><Star className="mr-2" size={16} /> 大切な記録</li>
              </ul>
            </div>
          </nav>
        </aside>

        {/* Main content area */}
        <main className="flex-1 p-4 overflow-y-auto">
          <div className="max-w-3xl mx-auto">
            <input type="text" placeholder="タイトルを入力" className="w-full text-2xl font-bold mb-4 p-2 border-b border-gray-300 focus:outline-none focus:border-primary" />
            <textarea placeholder="今日の出来事を記録しよう..." className="w-full h-64 p-2 border border-gray-300 rounded focus:outline-none focus:border-primary resize-none" />
          </div>
        </main>

        {/* Right sidebar */}
        <aside className={`w-64 bg-secondary p-4 overflow-y-auto transition-all duration-300 ease-in-out ${isRightSidebarOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0 md:static absolute inset-y-0 right-0 z-10`}>
          <Button variant="ghost" size="icon" className="absolute left-2 top-2 md:hidden" onClick={toggleRightSidebar}>
            <ChevronRight className="h-5 w-5" />
          </Button>
          <div className="space-y-4">
            <div>
              <h2 className="font-semibold mb-2">天気</h2>
              <p>晴れ 気温: 22°C</p>
            </div>
            <div>
              <h2 className="font-semibold mb-2">気分</h2>
              <select className="w-full p-2 border border-gray-300 rounded">
                <option>😊 幸せ</option>
                <option>😔 悲しい</option>
                <option>😠 怒り</option>
                <option>😌 リラックス</option>
              </select>
            </div>
            <div>
              <h2 className="font-semibold mb-2">タグ</h2>
              <input type="text" placeholder="タグを追加" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div>
              <h2 className="font-semibold mb-2">プライバシー</h2>
              <select className="w-full p-2 border border-gray-300 rounded">
                <option>非公開</option>
                <option>友達のみ</option>
                <option>公開</option>
              </select>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}