import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface MarkdownContentProps {
  content: string
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ node, ...props }) => (
          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-8 tamil-text" style={{ lineHeight: '1.4', overflow: 'visible', wordBreak: 'keep-all', overflowWrap: 'normal' }} {...props} />
        ),
        h2: ({ node, ...props }) => (
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8 tamil-text" style={{ lineHeight: '1.4', overflow: 'visible', wordBreak: 'keep-all', overflowWrap: 'normal' }} {...props} />
        ),
        h3: ({ node, ...props }) => (
          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6 tamil-text" style={{ lineHeight: '1.4', overflow: 'visible', wordBreak: 'keep-all', overflowWrap: 'normal' }} {...props} />
        ),
        p: ({ node, ...props }) => (
          <p className="text-gray-700 leading-relaxed mb-6 tamil-text" style={{ lineHeight: '1.8', overflow: 'visible', wordBreak: 'keep-all', overflowWrap: 'normal' }} {...props} />
        ),
        ul: ({ node, ...props }) => (
          <ul className="list-disc pl-6 mb-6 space-y-2" {...props} />
        ),
        ol: ({ node, ...props }) => (
          <ol className="list-decimal pl-6 mb-6 space-y-2" {...props} />
        ),
        li: ({ node, ...props }) => (
          <li className="text-gray-700 tamil-text" style={{ lineHeight: '1.8', overflow: 'visible', wordBreak: 'keep-all', overflowWrap: 'normal' }} {...props} />
        ),
        strong: ({ node, ...props }) => (
          <strong className="font-semibold text-gray-900" {...props} />
        ),
        a: ({ node, href, ...props }: any) => {
          const isExternal = href?.startsWith('http://') || href?.startsWith('https://')
          return (
            <a 
              className="text-blue-600 hover:text-blue-800 underline" 
              href={href}
              {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              {...props} 
            />
          )
        },
        table: ({ node, ...props }) => (
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300" {...props} />
          </div>
        ),
        thead: ({ node, ...props }) => (
          <thead className="bg-gray-100" {...props} />
        ),
        th: ({ node, ...props }) => (
          <th className="border border-gray-300 px-4 py-2 text-left font-semibold" {...props} />
        ),
        td: ({ node, ...props }) => (
          <td className="border border-gray-300 px-4 py-2" {...props} />
        ),
        blockquote: ({ node, ...props }) => (
          <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-6" {...props} />
        ),
        code: ({ node, inline, className, children, ...props }: any) => {
          if (inline) {
            return (
              <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono" {...props}>
                {children}
              </code>
            )
          }
          return (
            <pre className="bg-gray-100 p-4 rounded mb-6 overflow-x-auto">
              <code className={className} {...props}>
                {children}
              </code>
            </pre>
          )
        },
      }}
    >
      {content}
    </ReactMarkdown>
  )
}

