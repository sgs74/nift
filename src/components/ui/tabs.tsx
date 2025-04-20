
export function Tabs({ children }: any) {
  return <div>{children}</div>;
}
export function TabsList({ children, className }: any) {
  return <div className={className + " flex gap-2"}>{children}</div>;
}
export function TabsTrigger({ value, children }: any) {
  return <button className="px-4 py-2 bg-gray-200 rounded">{children}</button>;
}
export function TabsContent({ value, children }: any) {
  return <div className="mt-4">{children}</div>;
}
