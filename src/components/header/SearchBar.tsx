type SearchBarProps = {
  searchItem?: string;
  onSearchChange?: (value: string) => void;
};

export default function SearchBar({ searchItem, onSearchChange }: SearchBarProps) {
  return  (
    <div className="flex border rounded-md overflow-hidden w-[80%] h-10 border-gray-300">
      <input value={searchItem} onChange={(e) => onSearchChange?.(e.target.value)}
        id="search-input"
        type="text" 
        placeholder="100% hàng thật" 
        className="w-full px-4 text-sm outline-none border-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        autoComplete="off"
      />
      <div className="w-px bg-gray-300 my-2" />
      <button 
        className="px-4 text-sm text-blue-600 hover:bg-gray-50 whitespace-nowrap"
        type="button"
      >
        Tìm kiếm
      </button>
    </div>
    
    )
}
