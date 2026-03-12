'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useI18n } from '../contexts/I18nContext'
import { LanguageToggle } from '../components/LanguageToggle'
import { HeroDashboard } from '../components/dashboard/HeroDashboard'

// ============================================
// TechIcon - 科技感线性发光风格 Icon 组件
// ============================================
function TechIcon({ name, className = "w-10 h-10" }: { name: string; className?: string }) {
  const icons: Record<string, React.ReactNode> = {
    // Openclaw Automation - 六边形核心 + 机械臂抓取 + 网络架构
    automation: (
      <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* 六边形核心 */}
        <path d="M24 6L40 16V32L24 42L8 32V16L24 6Z" className="stroke-slate-900 group-hover:stroke-amber-500 transition-colors" />
        {/* 中心圆 - AI 核心 */}
        <circle cx="24" cy="24" r="6" className="stroke-amber-500" />
        {/* 机械臂 */}
        <path d="M24 18V12M18 24H12M30 24H36M24 30V36" className="stroke-slate-400" strokeDasharray="2 2" />
        {/* 连接点 */}
        <circle cx="24" cy="12" r="2" className="fill-amber-500 stroke-amber-500" />
        <circle cx="12" cy="24" r="2" className="fill-cyan-500 stroke-cyan-500" />
        <circle cx="36" cy="24" r="2" className="fill-cyan-500 stroke-cyan-500" />
        <circle cx="24" cy="36" r="2" className="fill-amber-500 stroke-amber-500" />
      </svg>
    ),
    // Personal Assistant - 全息投影 + 人机协作
    assistant: (
      <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* 全息投影基座 */}
        <path d="M12 36L24 42L36 36" className="stroke-slate-400" />
        <path d="M8 32L24 40L40 32" className="stroke-slate-300" strokeDasharray="3 2" />
        {/* 人形轮廓 */}
        <circle cx="24" cy="16" r="6" className="stroke-amber-500" />
        <path d="M16 28C16 24 20 22 24 22C28 22 32 24 32 28" className="stroke-slate-900" />
        {/* AI 指示器 */}
        <circle cx="24" cy="16" r="2" className="fill-cyan-500" />
        <path d="M20 14L22 16L20 18" className="stroke-cyan-500" strokeWidth="1" />
        <path d="M28 14L26 16L28 18" className="stroke-cyan-500" strokeWidth="1" />
      </svg>
    ),
    // Knowledge Base - 打开的书 + 数据飞轮
    library: (
      <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* 书籍轮廓 */}
        <path d="M8 8C8 8 16 4 24 8C32 4 40 8 40 8V36C40 36 32 32 24 36C16 32 8 36 8 36V8Z" className="stroke-slate-900" />
        {/* 书脊 */}
        <path d="M24 8V36" className="stroke-slate-400" />
        {/* 数据飞轮 */}
        <circle cx="32" cy="20" r="5" className="stroke-amber-500" strokeDasharray="3 2" />
        <circle cx="32" cy="20" r="2" className="fill-amber-500" />
        {/* 数据流动 */}
        <path d="M28 26L32 24L36 26" className="stroke-cyan-500" strokeWidth="1" />
        <circle cx="28" cy="26" r="1" className="fill-cyan-500" />
        <circle cx="36" cy="26" r="1" className="fill-cyan-500" />
      </svg>
    ),
    // Agent Customization - 核心齿轮 + 智能体团队
    robot: (
      <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* 中心齿轮 */}
        <circle cx="24" cy="24" r="8" className="stroke-amber-500" />
        <path d="M24 14V10M24 38V34M14 24H10M38 24H34" className="stroke-slate-900" strokeWidth="2" />
        {/* 齿轮齿 */}
        <path d="M18 18L15 15M33 15L30 18M18 30L15 33M30 30L33 33" className="stroke-slate-400" strokeWidth="1" />
        {/* 四个智能体 */}
        <circle cx="12" cy="12" r="3" className="stroke-cyan-500" />
        <circle cx="36" cy="12" r="3" className="stroke-cyan-500" />
        <circle cx="12" cy="36" r="3" className="stroke-cyan-500" />
        <circle cx="36" cy="36" r="3" className="stroke-cyan-500" />
        {/* 连接线 */}
        <path d="M14 14L18 18M34 14L30 18M14 34L18 30M34 34L30 30" className="stroke-slate-300" strokeDasharray="2 2" strokeWidth="1" />
      </svg>
    ),
    // AI Audit - 专家 + AI 头像交流
    audit: (
      <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* 人类专家 */}
        <circle cx="16" cy="18" r="6" className="stroke-slate-900" />
        <path d="M10 36C10 30 13 26 16 26C19 26 22 30 22 36" className="stroke-slate-900" />
        {/* AI 头像 */}
        <rect x="28" y="12" width="12" height="12" rx="2" className="stroke-amber-500" />
        <circle cx="34" cy="18" r="3" className="stroke-cyan-500" />
        {/* 交流连线 */}
        <path d="M22 18H28" className="stroke-slate-400" strokeDasharray="2 2" />
        {/* 数据流动 */}
        <circle cx="25" cy="16" r="1" className="fill-amber-500" />
        <circle cx="25" cy="18" r="1" className="fill-amber-500" />
        <circle cx="25" cy="20" r="1" className="fill-amber-500" />
      </svg>
    ),
    // AI Consulting - 灯泡灵感
    advisor: (
      <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* 灯泡主体 */}
        <path d="M24 6C17 6 12 11 12 18C12 24 16 28 18 30V34H30V30C32 28 36 24 36 18C36 11 31 6 24 6Z" className="stroke-amber-500" />
        {/* 灯泡底座 */}
        <path d="M18 34H30M20 38H28M22 42H26" className="stroke-slate-600" />
        {/* 发光线条 */}
        <path d="M24 2V0M12 14H10M38 14H36M14 8L12 6M34 8L36 6" className="stroke-amber-300" strokeWidth="1" />
        {/* AI 符号 */}
        <circle cx="24" cy="20" r="4" className="stroke-cyan-500" strokeDasharray="2 1" />
      </svg>
    ),
    // Solutions - 钥匙解锁
    solution: (
      <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* 锁 */}
        <rect x="8" y="20" width="16" height="16" rx="2" className="stroke-slate-900" />
        <path d="M12 20V14C12 10 16 8 20 8" className="stroke-slate-400" />
        {/* 钥匙 */}
        <circle cx="36" cy="14" r="6" className="stroke-amber-500" />
        <path d="M32 14H40M36 10V18" className="stroke-amber-500" />
        <path d="M32 20L32 28M36 20L36 28" className="stroke-amber-500" strokeWidth="2" />
        {/* 解锁效果 */}
        <path d="M20 28H24" className="stroke-cyan-500" strokeDasharray="2 1" />
      </svg>
    ),
    // Tech & Outsourcing - 人手与机械手相握
    tech: (
      <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* 左手（人类） */}
        <path d="M8 24C8 24 12 20 16 20C20 20 22 24 22 28C22 32 18 36 14 36" className="stroke-slate-900" />
        <path d="M14 28V36" className="stroke-slate-400" strokeWidth="1" />
        {/* 右手（机械） */}
        <path d="M40 24C40 24 36 20 32 20C28 20 26 24 26 28C26 32 30 36 34 36" className="stroke-amber-500" />
        <path d="M34 28V36" className="stroke-amber-500" strokeWidth="1" />
        {/* 握手中心 */}
        <circle cx="24" cy="26" r="4" className="stroke-cyan-500" />
        <circle cx="24" cy="26" r="1.5" className="fill-cyan-500" />
        {/* 电路纹理 */}
        <path d="M22 22L24 20L26 22" className="stroke-slate-300" strokeWidth="1" />
      </svg>
    ),
  }
  return icons[name] || <div className={className} />
}

// ============================================
// HealthDashboard - 交互式健康仪表盘
// ============================================
function HealthDashboard({ score, data, labels, size }: { 
  score: number; 
  data: number[]; 
  labels: string[]; 
  size: number 
}) {
  const [animatedScore, setAnimatedScore] = useState(0)
  const [scanAngle, setScanAngle] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  // 分数动画
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let current = 0
          const target = score
          const duration = 2000
          const startTime = Date.now()
          
          const animate = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            const easeProgress = 1 - Math.pow(1 - progress, 4)
            current = Math.floor(target * easeProgress)
            setAnimatedScore(current)
            if (progress < 1) requestAnimationFrame(animate)
          }
          animate()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [score])

  // 扫描动画
  useEffect(() => {
    const interval = setInterval(() => {
      setScanAngle(prev => (prev + 2) % 360)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const radius = size / 2
  const scoreColor = score >= 80 ? '#f59e0b' : score >= 60 ? '#22d3ee' : '#f97316'
  const scoreOpacity = animatedScore / 100

  return (
    <div ref={ref} className="relative" style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full">
        <defs>
          {/* 发光渐变 */}
          <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={scoreColor} stopOpacity="0.3" />
            <stop offset="100%" stopColor={scoreColor} stopOpacity="0" />
          </radialGradient>
          
          {/* 扫描渐变 */}
          <linearGradient id="scanGradient" gradientTransform={`rotate(${scanAngle} 0.5 0.5)`}>
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0" />
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
          </linearGradient>

          {/* 节点发光滤镜 */}
          <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* 背景发光 */}
        <circle cx={radius} cy={radius} r={radius * 0.85} fill="url(#glowGradient)" />
        
        {/* 背景网格圆 */}
        {[0, 1, 2, 3, 4].map(i => (
          <circle 
            key={i} 
            cx={radius} 
            cy={radius} 
            r={radius * (i + 1) / 5} 
            fill="none" 
            stroke="#e2e8f0" 
            strokeWidth="0.5"
            strokeDasharray={i === 4 ? "0" : "2 2"}
          />
        ))}

        {/* 轴线 */}
        {data.map((_, i) => {
          const angle = (i / data.length) * 2 * Math.PI - Math.PI / 2
          const x = radius + radius * 0.85 * Math.cos(angle)
          const y = radius + radius * 0.85 * Math.sin(angle)
          return (
            <line 
              key={i} 
              x1={radius} 
              y1={radius} 
              x2={x} 
              y2={y} 
              stroke="#e2e8f0" 
              strokeWidth="0.5"
              strokeDasharray="2 2"
            />
          )
        })}

        {/* 扫描效果 */}
        <circle 
          cx={radius} 
          cy={radius} 
          r={radius * 0.9} 
          fill="url(#scanGradient)"
          opacity="0.3"
        />

        {/* 数据区域 */}
        <polygon 
          points={data.map((v, i) => {
            const angle = (i / data.length) * 2 * Math.PI - Math.PI / 2
            const r = (v / 100) * radius * 0.75
            return `${radius + r * Math.cos(angle)},${radius + r * Math.sin(angle)}`
          }).join(' ')} 
          fill="rgba(245, 158, 11, 0.15)" 
          stroke="#f59e0b" 
          strokeWidth="1.5"
          className="animate-pulse"
        />

        {/* 发光数据节点 */}
        {data.map((value, i) => {
          const angle = (i / data.length) * 2 * Math.PI - Math.PI / 2
          const r = (value / 100) * radius * 0.75
          const x = radius + r * Math.cos(angle)
          const y = radius + r * Math.sin(angle)
          
          // 脉冲动画延迟
          const delay = i * 0.2
          
          return (
            <g key={i}>
              {/* 外层光晕 */}
              <circle 
                cx={x} 
                cy={y} 
                r="6" 
                fill="#f59e0b"
                opacity="0.2"
                style={{
                  animation: `pulse 2s ease-in-out ${delay}s infinite`,
                  transformOrigin: `${x}px ${y}px`
                }}
              />
              {/* 主节点 */}
              <circle 
                cx={x} 
                cy={y} 
                r="4" 
                fill="#f59e0b" 
                stroke="#fff" 
                strokeWidth="1.5"
                filter="url(#nodeGlow)"
              />
              {/* 中心亮点 */}
              <circle cx={x} cy={y} r="1.5" fill="#fff" />
            </g>
          )
        })}

        {/* 健康得分圆环 */}
        <circle 
          cx={radius} 
          cy={radius} 
          r={radius * 0.4} 
          fill="none" 
          stroke="#e2e8f0"
          strokeWidth="6"
        />
        <circle 
          cx={radius} 
          cy={radius} 
          r={radius * 0.4} 
          fill="none" 
          stroke={scoreColor}
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={`${2 * Math.PI * radius * 0.4 * scoreOpacity} ${2 * Math.PI * radius * 0.4}`}
          transform={`rotate(-90 ${radius} ${radius})`}
          style={{ transition: 'stroke-dasharray 2s ease-out' }}
        />

        {/* 分数显示 */}
        <text 
          x={radius} 
          y={radius - 8} 
          textAnchor="middle" 
          dominantBaseline="middle" 
          className="text-3xl font-bold"
          style={{ fontSize: '28px', fontWeight: 700, fontFamily: 'monospace' }}
          fill="#1e293b"
        >
          {animatedScore}
        </text>
        <text 
          x={radius} 
          y={radius + 12} 
          textAnchor="middle" 
          dominantBaseline="middle" 
          style={{ fontSize: '12px', fontFamily: 'monospace' }}
          fill="#94a3b8"
        >
          /100
        </text>

        {/* 标签 */}
        {labels.map((label, i) => {
          const angle = (i / labels.length) * 2 * Math.PI - Math.PI / 2
          const labelRadius = radius * 0.95
          const x = radius + labelRadius * Math.cos(angle)
          const y = radius + labelRadius * Math.sin(angle)
          return (
            <text 
              key={i} 
              x={x} 
              y={y} 
              textAnchor="middle" 
              dominantBaseline="middle" 
              style={{ fontSize: '9px', fontFamily: 'monospace', letterSpacing: '0.05em' }}
              fill="#64748b"
            >
              {label}
            </text>
          )
        })}
      </svg>

      {/* CSS 动画 */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.5); opacity: 0.1; }
        }
      `}</style>
    </div>
  )
}

// ============================================
// RadarChart - 雷达图组件（保留用于其他地方）
// ============================================
function RadarChart({ data, size, labels }: { data: number[]; size: number; labels: string[] }) {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full">
        {/* 背景网格 */}
        {[0, 1, 2, 3].map(i => (
          <circle key={i} cx={size / 2} cy={size / 2} r={size / 2 * (i + 1) / 4} fill="none" stroke="#e2e8f0" strokeWidth="1" />
        ))}
        {/* 轴线 */}
        {data.map((_, i) => {
          const angle = (i / data.length) * 2 * Math.PI - Math.PI / 2
          const x = size / 2 + (size / 2) * Math.cos(angle)
          const y = size / 2 + (size / 2) * Math.sin(angle)
          return <line key={i} x1={size / 2} y1={size / 2} x2={x} y2={y} stroke="#e2e8f0" strokeWidth="1" />
        })}
        {/* 数据区域 */}
        <polygon 
          points={data.map((v, i) => {
            const angle = (i / data.length) * 2 * Math.PI - Math.PI / 2
            const r = (v / 100) * (size / 2)
            return `${size / 2 + r * Math.cos(angle)},${size / 2 + r * Math.sin(angle)}`
          }).join(' ')} 
          fill="rgba(245, 158, 11, 0.2)" 
          stroke="#f59e0b" 
          strokeWidth="2" 
        />
        {/* 数据点 */}
        {data.map((value, i) => {
          const angle = (i / data.length) * 2 * Math.PI - Math.PI / 2
          const radius = (value / 100) * (size / 2)
          const x = size / 2 + radius * Math.cos(angle)
          const y = size / 2 + radius * Math.sin(angle)
          return <circle key={i} cx={x} cy={y} r="4" fill="#f59e0b" stroke="#fff" strokeWidth="1" />
        })}
        {/* 标签 */}
        {labels.map((label, i) => {
          const angle = (i / labels.length) * 2 * Math.PI - Math.PI / 2
          const radius = (size / 2) + 16
          const x = size / 2 + radius * Math.cos(angle)
          const y = size / 2 + radius * Math.sin(angle)
          return <text key={i} x={x} y={y} textAnchor="middle" dominantBaseline="middle" className="text-[10px] fill-slate-500 font-mono">{label}</text>
        })}
      </svg>
    </div>
  )
}

// ============================================
// ProgressBar - 进度条组件
// ============================================
function ProgressBar({ label, value, color, delay = 0 }: { label: string; value: number; color: string; delay?: number }) {
  const [width, setWidth] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(value), delay)
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, delay])

  const colorClass = color === 'orange' ? 'bg-orange-500' : color === 'cyan' ? 'bg-cyan-500' : 'bg-amber-500'

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-mono text-xs text-slate-500">{label}</span>
        <span className="font-mono text-sm text-slate-900">{value}%</span>
      </div>
      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
        <div 
          className={`h-full ${colorClass} transition-all duration-1000 ease-out rounded-full`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}

// ============================================
// Stat Counter Hook & Component
// ============================================
function useCountUp(target: number, duration: number = 2000, start: number = 0) {
  const [count, setCount] = useState(start)
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    if (elementRef.current) observer.observe(elementRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeProgress = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(start + (target - start) * easeProgress))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [target, duration, start, isVisible])

  return { count, elementRef }
}

function StatCard({ stat }: { stat: { value: number; suffix: string; label: string; delay: number } }) {
  const { count, elementRef } = useCountUp(stat.value, 2000, 0)
  return (
    <div ref={elementRef} className="text-center">
      <div className="font-mono text-4xl md:text-5xl text-amber-500 mb-2">{count}{stat.suffix}</div>
      <div className="font-mono text-xs text-slate-400 tracking-wider">{stat.label}</div>
    </div>
  )
}

// ============================================
// Mobile Navigation
// ============================================
function MobileNav({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { t } = useI18n()
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={onClose} />
      <div className="fixed top-0 right-0 h-full w-72 bg-white shadow-2xl">
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-slate-900 flex items-center justify-center">
                <span className="font-mono text-white text-sm font-bold">FA</span>
              </div>
              <span className="font-mono text-lg text-slate-900">FreeAI Audit</span>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded transition-colors">
              <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="square" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="space-y-2">
            <a href="#services" onClick={onClose} className="block font-mono text-sm text-slate-600 hover:text-amber-500 py-3 px-4 hover:bg-slate-50 rounded transition-colors">{t.nav.services}</a>
            <a href="#process" onClick={onClose} className="block font-mono text-sm text-slate-600 hover:text-amber-500 py-3 px-4 hover:bg-slate-50 rounded transition-colors">{t.nav.process}</a>
            <a href="#why-us" onClick={onClose} className="block font-mono text-sm text-slate-600 hover:text-amber-500 py-3 px-4 hover:bg-slate-50 rounded transition-colors">{t.nav.whyUs}</a>
            <Link href="/contact" onClick={onClose} className="block font-mono text-sm text-slate-600 hover:text-amber-500 py-3 px-4 hover:bg-slate-50 rounded transition-colors">Audit Form</Link>
          </nav>
          <div className="mt-8 pt-8 border-t border-slate-100">
            <Link 
              href="/audit-form" 
              onClick={onClose} 
              className="block w-full font-mono text-sm px-6 py-4 bg-amber-500 text-white text-center hover:bg-amber-600 transition-colors tracking-wider"
            >
              {t.nav.freeAudit}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================
// DataFlowBackground - 数据流与神经网络背景
// ============================================
function DataFlowBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* 数据流线条 */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#94a3b8" strokeWidth="0.5"/>
          </pattern>
          <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="15" cy="15" r="1" fill="#f59e0b" opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
      
      {/* 浮动神经网络节点 */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              opacity: 0.2 + Math.random() * 0.3,
            }}
          />
        ))}
      </div>

      {/* 数据流动画线条 */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0"/>
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="1"/>
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
          </linearGradient>
        </defs>
        <line x1="0" y1="20%" x2="100%" y2="25%" stroke="url(#flowGradient)" strokeWidth="0.5" className="animate-pulse" />
        <line x1="0" y1="50%" x2="100%" y2="45%" stroke="url(#flowGradient)" strokeWidth="0.5" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
        <line x1="0" y1="80%" x2="100%" y2="75%" stroke="url(#flowGradient)" strokeWidth="0.5" className="animate-pulse" style={{ animationDelay: '1s' }} />
      </svg>

      {/* 渐变遮罩 */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50" />
    </div>
  )
}

// ============================================
// GlowingStatCard - 发光统计卡片
// ============================================
function GlowingStatCard({ value, suffix, label, highlight, delay = 0 }: { 
  value: number; 
  suffix: string; 
  label: string;
  highlight?: string;
  delay?: number;
}) {
  const [displayValue, setDisplayValue] = useState(value)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (hasAnimated) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          setDisplayValue(0) // Reset to 0 for animation
          setTimeout(() => {
            let current = 0
            const target = value
            const duration = 2000
            const startTime = Date.now()
            
            const animate = () => {
              const elapsed = Date.now() - startTime
              const progress = Math.min(elapsed / duration, 1)
              const easeProgress = 1 - Math.pow(1 - progress, 4)
              current = Math.floor(target * easeProgress)
              setDisplayValue(current)
              if (progress < 1) requestAnimationFrame(animate)
            }
            animate()
          }, delay)
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, delay, hasAnimated])

  return (
    <div 
      ref={ref}
      className="relative group"
    >
      {/* 发光背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-cyan-500/10 blur-xl group-hover:from-amber-500/20 group-hover:to-cyan-500/20 transition-all duration-500" />
      
      {/* 卡片主体 */}
      <div className="relative bg-white border border-slate-200 p-6 group-hover:border-amber-500/50 transition-all duration-300">
        {/* 数值 */}
        <div className="font-mono text-4xl md:text-5xl text-slate-900 mb-2">
          <span className="text-amber-500">{displayValue}</span>
          <span className="text-slate-400">{suffix}</span>
        </div>
        
        {/* 标签 */}
        <div className="font-mono text-xs text-slate-500 tracking-wider mb-2">{label}</div>
        
        {/* 高亮标签 */}
        {highlight && (
          <div className="inline-flex items-center gap-1 px-2 py-1 bg-amber-50 border border-amber-200 rounded">
            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" />
            <span className="font-mono text-[10px] text-amber-600 tracking-wider">{highlight}</span>
          </div>
        )}
      </div>
    </div>
  )
}

// ============================================
// Main Page Component
// ============================================
export default function Home() {
  const { t } = useI18n()
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  // 服务列表
  const services = [
    { icon: 'automation', title: t.services.items[0].title, description: t.services.items[0].description, metrics: { label: t.services.items[0].metricLabel, value: 95, color: 'cyan' }, category: 'personal' },
    { icon: 'assistant', title: t.services.items[1].title, description: t.services.items[1].description, metrics: { label: t.services.items[1].metricLabel, value: 23, color: 'orange' }, category: 'personal' },
    { icon: 'library', title: t.services.items[2].title, description: t.services.items[2].description, metrics: { label: t.services.items[2].metricLabel, value: 12, color: 'amber' }, category: 'personal' },
    { icon: 'robot', title: t.services.items[3].title, description: t.services.items[3].description, metrics: { label: t.services.items[3].metricLabel, value: 3.2, color: 'cyan' }, category: 'personal' },
    { icon: 'audit', title: t.services.items[4].title, description: t.services.items[4].description, metrics: { label: t.services.items[4].metricLabel, value: 98, color: 'cyan' }, category: 'enterprise' },
    { icon: 'advisor', title: t.services.items[5].title, description: t.services.items[5].description, metrics: { label: t.services.items[5].metricLabel, value: 95, color: 'amber' }, category: 'enterprise' },
    { icon: 'solution', title: t.services.items[6].title, description: t.services.items[6].description, metrics: { label: t.services.items[6].metricLabel, value: 89, color: 'cyan' }, category: 'enterprise' },
    { icon: 'tech', title: '技术 & 外包', description: '技术实施、集成、定制开发 | 项目整体外包，专业团队执行', metrics: { label: '交付质量', value: 96, color: 'cyan' }, category: 'enterprise' },
  ]

  // 流程步骤
  const processSteps = [
    { step: '01', title: t.process.steps[0].title, description: t.process.steps[0].description, duration: t.process.steps[0].duration },
    { step: '02', title: t.process.steps[1].title, description: t.process.steps[1].description, duration: t.process.steps[1].duration },
    { step: '03', title: t.process.steps[2].title, description: t.process.steps[2].description, duration: t.process.steps[2].duration },
  ]

  // 统计数据 - 更具冲击力的话术
  const heroStats = [
    { value: 200, suffix: '+', label: 'AUDITS COMPLETED', highlight: 'TRUSTED' },
    { value: 27, suffix: '%', label: 'AVG EFFICIENCY GAIN', highlight: 'PROVEN' },
    { value: 48, suffix: 'h', label: 'DELIVERY TIME', highlight: 'GUARANTEED' },
    { value: 4.9, suffix: '/5', label: 'CLIENT RATING', highlight: 'EXCELLENCE' },
  ]

  // 雷达图数据
  const radarData = [85, 72, 91, 68, 79]
  const radarLabels = [t.radar.strategy, t.radar.risk, t.radar.growth, t.radar.roi, t.radar.tech]

  return (
    <main className="min-h-screen bg-slate-50 relative">
      {/* 数据流与神经网络背景 */}
      <DataFlowBackground />
      
      {/* ============================================ */}
      {/* Header */}
      {/* ============================================ */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-50/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-slate-900 flex items-center justify-center group-hover:bg-amber-500 transition-colors">
              <span className="font-mono text-white text-sm font-bold">FA</span>
            </div>
            <span className="font-mono text-lg text-slate-900 tracking-tight group-hover:text-amber-500 transition-colors">FreeAI Audit</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="font-mono text-sm text-cyan-500 hover:text-amber-500 transition-colors">{t.dashboard.home.navHome}</Link>
            <a href="#services" className="font-mono text-sm text-slate-600 hover:text-amber-500 transition-colors">{t.nav.services}</a>
            <a href="#process" className="font-mono text-sm text-slate-600 hover:text-amber-500 transition-colors">{t.nav.process}</a>
            <a href="#why-us" className="font-mono text-sm text-slate-600 hover:text-amber-500 transition-colors">{t.nav.whyUs}</a>
            <Link href="#cta" className="font-mono text-sm text-slate-600 hover:text-amber-500 transition-colors">{t.dashboard.home.navAudit}</Link>
          </nav>
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <button 
              onClick={() => setMobileNavOpen(true)} 
              className="md:hidden p-2 hover:bg-slate-100 rounded transition-colors"
            >
              <svg className="w-6 h-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="square" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <Link 
              href="/audit-form" 
              className="hidden md:inline-block font-mono text-xs px-6 py-3 bg-slate-900 text-white hover:bg-amber-500 transition-colors tracking-wider"
            >
              {t.nav.freeAudit}
            </Link>
          </div>
        </div>
      </header>

      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      {/* ============================================ */}
      {/* Hero Section - Dynamic Dashboard */}
      <HeroDashboard />
      {/* Services Section - Bento Box 布局 */}
      {/* ============================================ */}
      <section id="services" className="py-24 px-6 md:px-8 lg:px-12 bg-white relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-20 left-10 w-64 h-64 bg-amber-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-cyan-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="font-mono text-xs text-slate-400 tracking-[0.2em]">{t.services.sectionTitle}</span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>
          <h2 className="font-mono text-3xl md:text-4xl text-slate-900 mb-16 text-center">{t.services.headline}</h2>

          {/* Bento Box Grid - 不对称布局 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
            {/* 主推服务 1: Openclaw Automation (2x1) */}
            <div className="md:col-span-2 group relative bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 p-5 hover:border-amber-500 hover:shadow-2xl transition-all duration-500 overflow-hidden">
              {/* 节点动画背景 */}
              <div className="absolute inset-0 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-amber-400 rounded-full animate-pulse"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${30 + (i % 3) * 20}%`,
                      animationDelay: `${i * 0.2}s`,
                    }}
                  />
                ))}
              </div>

              {/* 第一行：服务标签 */}
              <div className="inline-flex items-center gap-2 font-mono text-xs px-2 py-1 bg-cyan-50 text-cyan-600 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                {t.services.personalServices}
              </div>

              {/* 第二行：icon + 标题 */}
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-white border border-slate-200 flex items-center justify-center group-hover:border-amber-500 transition-all flex-shrink-0">
                  <TechIcon name="automation" className="w-8 h-8" />
                </div>
                <h3 className="font-mono text-lg text-slate-900 group-hover:text-amber-500 transition-colors">
                  {t.services.items[0].title}
                </h3>
              </div>

              {/* 第三行：描述 */}
              <p className="font-mono text-xs text-slate-600 leading-relaxed">
                {t.dashboard.home.services.automationDesc}
              </p>
            </div>

            {/* 辅助服务: Personal Assistant (1x1) */}
            <div className="group relative bg-white border border-slate-200 p-5 hover:border-cyan-500 hover:shadow-lg transition-all duration-300 overflow-hidden">
              {/* 微交互：节点连接动画 */}
              <div className="absolute top-4 right-4 w-12 h-12 opacity-60 group-hover:opacity-100 transition-opacity">
                <svg viewBox="0 0 64 64" className="w-full h-full">
                  <circle cx="32" cy="32" r="4" fill="#06b6d4" className="animate-pulse" />
                  <circle cx="16" cy="16" r="2" fill="#f59e0b" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <circle cx="48" cy="16" r="2" fill="#f59e0b" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
                  <line x1="18" y1="18" x2="28" y2="28" stroke="#06b6d4" strokeWidth="1" strokeDasharray="2 2" />
                  <line x1="46" y1="18" x2="36" y2="28" stroke="#06b6d4" strokeWidth="1" strokeDasharray="2 2" />
                </svg>
              </div>

              {/* 第一行：服务标签 */}
              <div className="inline-flex items-center gap-2 font-mono text-xs px-2 py-1 bg-cyan-50 text-cyan-600 mb-3">
                {t.services.personalServices}
              </div>

              {/* 第二行：icon + 标题 */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:border-cyan-500 transition-all flex-shrink-0">
                  <TechIcon name="assistant" className="w-6 h-6" />
                </div>
                <h3 className="font-mono text-base text-slate-900 group-hover:text-cyan-500 transition-colors">
                  {t.services.items[1].title}
                </h3>
              </div>

              {/* 第三行：描述 */}
              <p className="font-mono text-xs text-slate-600">
                {t.dashboard.home.services.assistantDesc}
              </p>
            </div>

            {/* 辅助服务: Knowledge Base (1x1) */}
            <div className="group relative bg-white border border-slate-200 p-5 hover:border-amber-500 hover:shadow-lg transition-all duration-300 overflow-hidden">
              {/* 微交互：数据飞轮 */}
              <div className="absolute top-4 right-4 w-12 h-12 opacity-60 group-hover:opacity-100 transition-all duration-500">
                <svg viewBox="0 0 64 64" className="w-full h-full animate-spin" style={{ animationDuration: '8s' }}>
                  <circle cx="32" cy="32" r="20" fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="10 5" />
                  <circle cx="32" cy="12" r="3" fill="#f59e0b" />
                  <circle cx="48" cy="40" r="2" fill="#06b6d4" />
                  <circle cx="16" cy="40" r="2" fill="#06b6d4" />
                </svg>
              </div>

              {/* 第一行：服务标签 */}
              <div className="inline-flex items-center gap-2 font-mono text-xs px-2 py-1 bg-cyan-50 text-cyan-600 mb-3">
                {t.services.personalServices}
              </div>

              {/* 第二行：icon + 标题 */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:border-amber-500 transition-all flex-shrink-0">
                  <TechIcon name="library" className="w-6 h-6" />
                </div>
                <h3 className="font-mono text-base text-slate-900 group-hover:text-amber-500 transition-colors">
                  {t.services.items[2].title}
                </h3>
              </div>

              {/* 第三行：描述 */}
              <p className="font-mono text-xs text-slate-600">
                {t.dashboard.home.services.libraryDesc}
              </p>
            </div>

            {/* 辅助服务: Agent Customization (1x1) */}
            <div className="group relative bg-white border border-slate-200 p-5 hover:border-cyan-500 hover:shadow-lg transition-all duration-300 overflow-hidden">
              {/* 微交互：多节点图谱 */}
              <div className="absolute top-4 right-4 w-12 h-12 opacity-60 group-hover:opacity-100 transition-opacity">
                <svg viewBox="0 0 64 64" className="w-full h-full">
                  <circle cx="32" cy="32" r="4" fill="#f59e0b" />
                  <circle cx="16" cy="16" r="3" fill="#06b6d4" className="animate-pulse" />
                  <circle cx="48" cy="16" r="3" fill="#06b6d4" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
                  <circle cx="16" cy="48" r="3" fill="#06b6d4" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
                  <circle cx="48" cy="48" r="3" fill="#06b6d4" className="animate-pulse" style={{ animationDelay: '0.9s' }} />
                  <line x1="20" y1="20" x2="28" y2="28" stroke="#f59e0b" strokeWidth="1" />
                  <line x1="44" y1="20" x2="36" y2="28" stroke="#f59e0b" strokeWidth="1" />
                  <line x1="20" y1="44" x2="28" y2="36" stroke="#f59e0b" strokeWidth="1" />
                  <line x1="44" y1="44" x2="36" y2="36" stroke="#f59e0b" strokeWidth="1" />
                </svg>
              </div>

              {/* 第一行：服务标签 */}
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1 font-mono text-xs px-2 py-0.5 bg-cyan-50 text-cyan-600">
                  {t.services.personalServices}
                </span>
                <span className="inline-flex items-center gap-1 font-mono text-xs px-2 py-0.5 bg-amber-50 text-amber-600">
                  {t.services.enterpriseServices}
                </span>
              </div>

              {/* 第二行：icon + 标题 */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:border-cyan-500 transition-all flex-shrink-0">
                  <TechIcon name="robot" className="w-6 h-6" />
                </div>
                <h3 className="font-mono text-base text-slate-900 group-hover:text-cyan-500 transition-colors">
                  {t.services.items[3].title}
                </h3>
              </div>

              {/* 第三行：描述 */}
              <p className="font-mono text-xs text-slate-600">
                {t.dashboard.home.services.robotDesc}
              </p>
            </div>

            {/* 辅助服务: Tech & Outsourcing (1x1) */}
            <div className="group relative bg-white border border-slate-200 p-5 hover:border-amber-500 hover:shadow-lg transition-all duration-300">
              {/* 第一行：服务标签 */}
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1 font-mono text-xs px-2 py-0.5 bg-cyan-50 text-cyan-600">
                  {t.services.personalServices}
                </span>
                <span className="inline-flex items-center gap-1 font-mono text-xs px-2 py-0.5 bg-amber-50 text-amber-600">
                  {t.services.enterpriseServices}
                </span>
              </div>

              {/* 第二行：icon + 标题 */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:border-amber-500 transition-all flex-shrink-0">
                  <TechIcon name="tech" className="w-6 h-6" />
                </div>
                <h3 className="font-mono text-base text-slate-900 group-hover:text-amber-500 transition-colors">
                  {t.dashboard.home.techOutsource}
                </h3>
              </div>

              {/* 第三行：描述 */}
              <p className="font-mono text-xs text-slate-600">
                {t.dashboard.home.techOutsourceDesc}
              </p>
            </div>

            {/* 主推服务 2: AI Audit (2x2) */}
            <div className="md:col-span-2 md:row-span-2 group relative bg-gradient-to-r from-slate-900 to-slate-800 p-5 hover:shadow-2xl transition-all duration-500 overflow-hidden">
              {/* 智能路由动画 */}
              <div className="absolute inset-0 opacity-10">
                <svg viewBox="0 0 400 100" className="w-full h-full">
                  <path d="M0,50 Q100,20 200,50 T400,50" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5 5" className="animate-pulse" />
                  <path d="M0,30 Q100,60 200,30 T400,30" fill="none" stroke="#06b6d4" strokeWidth="2" strokeDasharray="5 5" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <path d="M0,70 Q100,40 200,70 T400,70" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5 5" className="animate-pulse" style={{ animationDelay: '1s' }} />
                </svg>
              </div>

              {/* 第一行：服务标签 */}
              <div className="inline-flex items-center gap-2 font-mono text-xs px-2 py-1 bg-amber-500/20 text-amber-400 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                {t.services.enterpriseServices}
              </div>

              {/* 第二行：icon + 标题 */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                  <TechIcon name="audit" className="w-6 h-6" />
                </div>
                <h3 className="font-mono text-base text-white group-hover:text-amber-400 transition-colors">
                  {t.services.items[4].title}
                </h3>
              </div>

              {/* 第三行：描述 */}
              <p className="font-mono text-xs text-slate-300 mb-4">
                {t.dashboard.home.services.auditDesc}
              </p>

              {/* 第四行：L0/L1/L2 服务级别 */}
              <div className="grid grid-cols-3 gap-2">
                {/* L0 */}
                <div className="text-center bg-slate-800/50 p-3 border border-slate-700">
                  <div className="font-mono text-2xl text-slate-400 mb-1">L0</div>
                  <div className="font-mono text-xs text-slate-300 mb-1">Free Audit</div>
                  <p className="font-mono text-[10px] text-slate-500">{t.pricing.l0Description}</p>
                </div>
                {/* L1 */}
                <div className="text-center bg-slate-800 p-3 border border-amber-500 relative">
                  <div className="font-mono text-2xl text-amber-500 mb-1">L1</div>
                  <div className="font-mono text-xs text-slate-300 mb-1">Professional</div>
                  <p className="font-mono text-[10px] text-slate-500">{t.pricing.l1Description}</p>
                </div>
                {/* L2 */}
                <div className="text-center bg-slate-800/50 p-3 border border-slate-700">
                  <div className="font-mono text-2xl text-cyan-500 mb-1">L2</div>
                  <div className="font-mono text-xs text-slate-300 mb-1">Enterprise</div>
                  <p className="font-mono text-[10px] text-slate-500">{t.pricing.l2Description}</p>
                </div>
              </div>
            </div>

            {/* 辅助服务: AI Consulting (1x1) */}
            <div className="group relative bg-white border border-slate-200 p-5 hover:border-amber-500 hover:shadow-lg transition-all duration-300">
              {/* 第一行：服务标签 */}
              <div className="inline-flex items-center gap-2 font-mono text-xs px-2 py-1 bg-amber-50 text-amber-600 mb-3">
                {t.services.enterpriseServices}
              </div>

              {/* 第二行：icon + 标题 */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:border-amber-500 transition-all flex-shrink-0">
                  <TechIcon name="advisor" className="w-6 h-6" />
                </div>
                <h3 className="font-mono text-base text-slate-900 group-hover:text-amber-500 transition-colors">
                  {t.services.items[5].title}
                </h3>
              </div>

              {/* 第三行：描述 */}
              <p className="font-mono text-xs text-slate-600">
                {t.dashboard.home.services.advisorDesc}
              </p>
            </div>

            {/* 辅助服务: Solutions (1x1) */}
            <div className="group relative bg-white border border-slate-200 p-5 hover:border-cyan-500 hover:shadow-lg transition-all duration-300">
              {/* 第一行：服务标签 */}
              <div className="inline-flex items-center gap-2 font-mono text-xs px-2 py-1 bg-amber-50 text-amber-600 mb-3">
                {t.services.enterpriseServices}
              </div>

              {/* 第二行：icon + 标题 */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:border-cyan-500 transition-all flex-shrink-0">
                  <TechIcon name="solution" className="w-6 h-6" />
                </div>
                <h3 className="font-mono text-base text-slate-900 group-hover:text-cyan-500 transition-colors">
                  {t.services.items[6].title}
                </h3>
              </div>

              {/* 第三行：描述 */}
              <p className="font-mono text-xs text-slate-600">
                {t.dashboard.home.services.solutionDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* Process Section */}
      {/* ============================================ */}
      <section id="process" className="py-24 px-6 md:px-8 lg:px-12 bg-slate-100">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-slate-300" />
            <span className="font-mono text-xs text-slate-500 tracking-[0.2em]">{t.process.sectionTitle}</span>
            <div className="h-px flex-1 bg-slate-300" />
          </div>
          <h2 className="font-mono text-3xl md:text-4xl text-slate-900 mb-16 text-center">{t.process.headline}</h2>

          {/* Process Steps */}
          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Step Number Background */}
                <div className="font-mono text-[120px] text-slate-200 absolute -top-8 -right-4 -z-10 select-none leading-none group-hover:text-amber-200 transition-colors">
                  {step.step}
                </div>

                {/* Card */}
                <div className="bg-white border border-slate-200 p-6 md:p-8 h-full group-hover:border-amber-500 group-hover:shadow-lg transition-all duration-300">
                  {/* Step Badge */}
                  <div className="inline-flex items-center gap-2 font-mono text-xs text-amber-600 bg-amber-50 px-3 py-1 mb-4">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                    {t.process.step} {step.step}
                  </div>

                  {/* Title */}
                  <h3 className="font-mono text-xl text-slate-900 mb-3">{step.title}</h3>

                  {/* Description */}
                  <p className="font-mono text-sm text-slate-600 leading-relaxed mb-6">{step.description}</p>

                  {/* Duration */}
                  <div className="flex items-center gap-2 pt-4 border-t border-slate-100">
                    <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="square" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-mono text-xs text-slate-500">{step.duration}</span>
                  </div>
                </div>

                {/* Connector Line */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-slate-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* Service Levels Section */}
      {/* ============================================ */}
      {/* Why Us Section */}
      {/* ============================================ */}
      <section id="why-us" className="py-24 px-6 md:px-8 lg:px-12 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-slate-700" />
            <span className="font-mono text-xs text-slate-500 tracking-[0.2em]">{t.whyUs.sectionTitle}</span>
            <div className="h-px flex-1 bg-slate-700" />
          </div>
          <h2 className="font-mono text-3xl md:text-4xl text-white mb-16 text-center">{t.whyUs.headline}</h2>

          {/* Stats - 发光卡片展示 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {heroStats.map((stat, index) => (
              <GlowingStatCard 
                key={index} 
                value={stat.value} 
                suffix={stat.suffix} 
                label={stat.label}
                highlight={stat.highlight}
                delay={index * 150}
              />
            ))}
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {t.whyUs.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-4 hover:bg-slate-800/50 transition-colors rounded">
                <div className="w-8 h-8 bg-amber-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="square" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-mono text-sm text-white mb-1">{feature.title}</h4>
                  <p className="font-mono text-xs text-slate-400">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CTA Section - 增强转化 */}
      {/* ============================================ */}
      <section id="cta" className="relative py-32 px-6 md:px-8 lg:px-12 overflow-hidden">
        {/* 动态背景 */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        
        {/* 网格背景 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(245,158,11,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* 发光效果 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* 信任徽章 */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
              <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-mono text-xs text-white/80">{t.dashboard.home.cta.badgeAudits}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
              <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-mono text-xs text-white/80">{t.dashboard.home.cta.badgeRating}</span>
            </div>
          </div>

          {/* 主标题 */}
          <h2 className="font-mono text-4xl md:text-5xl lg:text-6xl text-white text-center mb-6 leading-tight">
            <span className="text-amber-400">{t.dashboard.home.cta.headline1}</span>
            <br />
            <span className="text-slate-300">{t.dashboard.home.cta.headline2}</span>
          </h2>

          {/* 描述 */}
          <p className="font-mono text-base md:text-lg text-slate-400 text-center mb-10 max-w-2xl mx-auto">
            {t.dashboard.home.cta.description}
            <br />
            {t.dashboard.home.cta.description2}
          </p>

          {/* CTA 按钮组 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link 
              href="/audit-form" 
              className="group font-mono text-sm px-10 py-5 bg-amber-500 text-slate-900 hover:bg-amber-400 transition-all tracking-wider flex items-center gap-3 shadow-lg shadow-amber-500/20"
            >
              {t.dashboard.home.cta.buttonFree}
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link 
              href="/contact" 
              className="font-mono text-sm px-10 py-5 border border-white/20 text-white hover:bg-white/5 transition-all tracking-wider"
            >
              {t.dashboard.home.cta.buttonContact}
            </Link>
          </div>

          {/* 保障标签 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-2 p-4 bg-white/5 border border-white/10 rounded-lg">
              <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="font-mono text-xs text-white font-bold">{t.dashboard.home.cta.trustFree}</span>
              <span className="font-mono text-xs text-slate-400">{t.dashboard.home.cta.trustFreeDesc}</span>
            </div>

            <div className="flex flex-col items-center gap-2 p-4 bg-white/5 border border-white/10 rounded-lg">
              <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <span className="font-mono text-xs text-white font-bold">{t.dashboard.home.cta.trustNoData}</span>
              <span className="font-mono text-xs text-slate-400">{t.dashboard.home.cta.trustNoDataDesc}</span>
            </div>

            <div className="flex flex-col items-center gap-2 p-4 bg-white/5 border border-white/10 rounded-lg">
              <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="font-mono text-xs text-white font-bold">{t.dashboard.home.cta.trustDelivery}</span>
              <span className="font-mono text-xs text-slate-400">{t.dashboard.home.cta.trustDeliveryDesc}</span>
            </div>

            <div className="flex flex-col items-center gap-2 p-4 bg-white/5 border border-white/10 rounded-lg">
              <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="font-mono text-xs text-white font-bold">{t.dashboard.home.cta.trustExpert}</span>
              <span className="font-mono text-xs text-slate-400">{t.dashboard.home.cta.trustExpertDesc}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* Footer */}
      {/* ============================================ */}
      <footer className="relative z-20 py-8 px-6 md:px-8 border-t border-slate-700/60 bg-slate-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-amber-500 flex items-center justify-center">
              <span className="font-mono text-slate-900 text-xs font-bold">FA</span>
            </div>
            <span className="font-mono text-sm text-white">FreeAI Audit</span>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/audit-form"
              className="font-mono text-xs text-slate-300 hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              Audit Form
            </Link>
            <Link
              href="/contact"
              className="font-mono text-xs text-slate-300 hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              Contact
            </Link>
            <Link
              href="/pricing"
              className="font-mono text-xs text-slate-300 hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              Pricing
            </Link>
          </div>
          <div className="font-mono text-xs text-slate-300/80">{t.footer.copyright}</div>
        </div>
      </footer>
    </main>
  )
}