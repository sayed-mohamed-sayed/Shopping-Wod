
function Order() {
    return (
            <div className="bg-[#70908B] text-white w-[95%] h-[250px]  rounded">
<div className="flex justify-center items-center flex-col gap-4 w-[100%] p-2">
    <h1 className="font-bold text-lg mb-4">Order</h1>
    <div className="flex justify-between w-[100%] border-b border-solid border-white">
        <h1>Shopping</h1>
        <p>Free</p>
    </div>
    <div className="flex justify-between w-[100%] border-b border-solid border-white ">
        <h1>Discount</h1>
        <p>0$</p>
    </div>
    <div className="flex justify-between w-[100%] border-b border-solid border-white">
        <h1>Total </h1>
        <p>468$</p>
    </div>
   <button className="text-white font-bold text-lg">Check Out</button>
</div>
            </div>
    );
};

export default Order;