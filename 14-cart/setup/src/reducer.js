const reducer = (state,action) => {
    if(action.type==="REMOVE_ITEM"){
        return {...state,cart:state.cart.filter((item)=>item.id!==action.id)}
    }
    if(action.type==="REMOVE_ALL"){
        return {...state,cart:[]};
    }
    if(action.type==="INCREASE"){
        const updatedAmountCart = state.cart.map((item)=>{
            if(item.id===action.id){
                return {...item,amount:item.amount+1}
            }
            return item;
        })
        return {...state,cart:updatedAmountCart};
    }
    if(action.type==="DECREASE"){
        const updatedAmountCart = state.cart.map((item)=>{
            if(item.id===action.id){
                let decreamentCount = item.amount-1;
                if(decreamentCount<0){
                    decreamentCount = 0;
                }
                return {...item,amount:decreamentCount}
            }
            return item;
        })
        // const hi = updatedAmountCart.filter((item)=>{
        //     if(item.amount!==0){
        //         return item;
        //     }
        // })
        // return {...state,cart:hi};

        // Above commented code is used to remove item from the cart whose count becomes zero on decreament.

        return {...state,cart:updatedAmountCart};
    }
    if(action.type==="TOTALS"){ 
        // let amt=0,tot=0;
        // const tots = state.cart.reduce((arr,currItem)=>{
        //     amt=amt+currItem.amount;
        //     tot=tot+(currItem.price * currItem.amount);
        //     arr=[amt,tot];
        //     return arr;
        // },[]);       
        // tots[1]=parseFloat(tots[1].toFixed(2));

        // Above code is for reduce returning an arry.
        // Below code is for reduce returning an object.

        const tots = state.cart.reduce((obj,currItem)=>{
            obj.amt = obj.amt + currItem.amount;
            obj.tot = obj.tot + (currItem.amount * currItem.price);
            return obj;
        }, {amt:0,tot:0})

        tots.tot = parseFloat(tots.tot.toFixed(2));
        return {...state,amount:tots.amt,total:tots.tot}
    }
    if(action.type==="DISPLAY_ITEMS"){
        return {...state,cart:action.data,loading:false};
    }
    if(action.type==="LOADING"){
        return {...state,loading:true}
    }
}

export default reducer;