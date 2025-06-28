export default function Discover(){
    return(
        <div className="bg-white rounded-lg mt-4 py-4 px-4">
            <h1 className="font-bold">khám phá theo danh mục</h1>
            <div className="flex gap-24 mt-4">
                <div>
                    <img src="/assets/discover1.png" alt="" className="rounded-full h-24 w-24"/>
                    <span>English Books</span>
                </div>
                <div>
                    <img src="/assets/discover2.png" alt="" className="rounded-full h-24 w-24" />
                    <span>Sách tiếng Việt</span>
                </div>
                <div>
                    <img src="/assets/discover3.png" alt="" className="rounded-full h-24 w-24" />
                    <span>Văn phòng phẩm</span>
                </div>
                <div>
                    <img src="/assets/discover4.png" alt="" className="rounded-full h-24 w-24" />
                    <span>Qùa lưu niệm  </span>
                </div>

            </div>
        </div>
    )
}