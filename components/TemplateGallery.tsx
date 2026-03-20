import { TEMPLATES } from '@/lib/templates';

export function TemplateGallery() {
  return (
    <div className="grid md:grid-cols-5 gap-4">
      {TEMPLATES.map((template) => (
        <div
          key={template.name}
          className="group rounded-xl overflow-hidden border border-white/10 hover:border-indigo-500/40 hover:shadow-md transition-all cursor-default"
        >
          <div
            className="h-32 flex items-center justify-center text-white text-sm font-medium"
            style={{ backgroundColor: template.primaryColor }}
          >
            <div className="text-center px-3">
              <div className="text-lg font-bold mb-1">{template.name}</div>
              <div className="text-xs opacity-75">{template.category}</div>
            </div>
          </div>
          <div className="p-3 bg-white/[0.03]">
            <p className="text-xs text-zinc-400 leading-relaxed">{template.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
