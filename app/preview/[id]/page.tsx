import { notFound } from 'next/navigation';
import { getRecord } from '@/lib/store';
import Link from 'next/link';

export default async function PreviewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const record = getRecord(id);

  if (!record) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Preview bar */}
      <div className="bg-gray-900 text-white px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center text-xs font-bold">PF</div>
          <span className="text-sm font-medium">
            Preview: <span className="text-indigo-400">{record.input.businessName}</span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-400">
            Generated {new Date(record.createdAt).toLocaleDateString()}
          </span>
          <Link
            href="/generate"
            className="bg-indigo-600 text-white text-xs px-4 py-1.5 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
          >
            Create Your Own →
          </Link>
        </div>
      </div>

      {/* Full-height iframe */}
      <div className="flex-1">
        <iframe
          srcDoc={record.result.html}
          className="w-full h-full border-0"
          style={{ minHeight: 'calc(100vh - 52px)' }}
          sandbox="allow-scripts allow-same-origin"
          title={`${record.input.businessName} landing page preview`}
        />
      </div>
    </div>
  );
}
