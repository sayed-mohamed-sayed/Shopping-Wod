import Link from 'next/link';
import Homechair from "@/app/Home/page"
import Categroy from "@/app/categrio/page"
import Popular from "@/app/popular/page"
import Pay from "@/app/paymop/page"
import Rate from"@/app/Rate/page"
import Slider from "@/app/fishonproduct/slider"
export default function Homew() {
  
    return (
        <>
        <div className='relative'>
<Homechair/>
        </div>
<div className="">
<Categroy/>
</div>
<div className="">
<Popular/>
</div>
<div className="">
    <Slider/>
</div>
<Pay/>
<Rate />
        </>
    );
};

