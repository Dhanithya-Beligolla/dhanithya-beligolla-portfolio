import { useMemo, useState } from "react";

interface EditableDataPanelProps<T> {
  title: string;
  storageKey: string;
  data: T[];
  onSave: (items: T[]) => void;
  onReset: () => void;
}

export default function EditableDataPanel<T>({
  title,
  storageKey,
  data,
  onSave,
  onReset
}: EditableDataPanelProps<T>) {
  const initialText = useMemo(() => JSON.stringify(data, null, 2), [data]);
  const [text, setText] = useState(initialText);
  const [message, setMessage] = useState("");

  const handleSave = () => {
    try {
      const parsed = JSON.parse(text) as T[];
      if (!Array.isArray(parsed)) {
        setMessage("JSON must be an array.");
        return;
      }

      onSave(parsed);
      setMessage(`Saved to localStorage key: ${storageKey}`);
    } catch {
      setMessage("Invalid JSON. Please check commas, quotes, and brackets.");
    }
  };

  const handleReset = () => {
    onReset();
    setText(initialText);
    setMessage("Reset to default JSON data.");
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-bold text-slate-950">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        Edit this JSON to add multiple items, certificate links, GitHub links, Google Drive links, and other attachments.
        These edits save only in your browser localStorage.
      </p>

      <textarea
        value={text}
        onChange={(event) => setText(event.target.value)}
        className="mt-4 h-80 w-full rounded-xl border border-slate-300 bg-slate-950 p-4 font-mono text-sm text-slate-100 outline-none focus:border-blue-500"
      />

      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleSave}
          className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-500"
        >
          Save Changes
        </button>

        <button
          type="button"
          onClick={handleReset}
          className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 hover:border-blue-500 hover:text-blue-600"
        >
          Reset
        </button>
      </div>

      {message && <p className="mt-3 text-sm font-medium text-slate-600">{message}</p>}
    </div>
  );
}