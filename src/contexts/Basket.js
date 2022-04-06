import React, { useContext, useState } from "react";

const BasketContext = React.createContext();

const BasketProvider = ({children}) =>{
    const [basketList,setBasketList] = useState([]);
    

    const addBasket = data => {
        const exList = [...basketList];
        const index = exList.findIndex(x=>x.id === data.id)

        if(index > -1){
            exList[index].count = exList[index].count +1
        }
        else{
            exList.push({...data, count: 1}); 
        }
        
        setBasketList(exList);
    }

    const deleteProduct = item =>{
        const exList = [...basketList];
        const index = exList.findIndex(x=>x.id === item.id)

        if(index > -1){
            if(item.count >1){
                exList[index].count = exList[index].count -1
            }
            else{
                exList.splice(index,1)
            }
        }
        setBasketList(exList)

    }

    return(
        <BasketContext.Provider
        value={{
            basketList,
            addBasket,
            deleteProduct
          }}
        >
            {children}
        </BasketContext.Provider>
    )
}
function useBasket(){
    return useContext(BasketContext);
}


export {BasketProvider,BasketContext,useBasket}