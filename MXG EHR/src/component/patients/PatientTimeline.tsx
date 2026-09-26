interface TimelineItem {
  id: string;
  date: string;
  title: string;
  description: string;
  type: string;
}

interface Props {
  items: TimelineItem[];
}

export default function PatientTimeline({
  items,
}: Props) {
  return (
    <div className="space-y-5">
      {items.map((item) => (
        <div key={item.id} className="flex gap-4">
          <div className="mt-1 h-3 w-3 rounded-full bg-blue-600" />

          <div>
            <div className="flex gap-3">
              <h3 className="font-medium text-gray-900">
                {item.title}
              </h3>

              <span className="text-xs text-gray-400">
                {item.date}
              </span>
            </div>

            <p className="mt-1 text-sm text-gray-600">
              {item.description}
            </p>

            <p className="mt-1 text-xs text-blue-600">
              {item.type}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}