import React from "react"
export default function Table({list, total}){
    return(
      <>
       <table width="100%" className="mb-10" >
          <thead>
              <tr className="bg-gray-100 py-1">
                <td className="font-bold">Item Description/job Description</td>
                <td className="font-bold">Quantity/Hours</td>
                <td className="font-bold">Price/Hourly_Rate</td>
                <td className="font-bold">Amount</td>
              </tr>
          </thead>
             {list.map(({id, description, quantity, price, amount})=>(
                 <React.Fragment key={id}>
                    <tbody>
                      <tr>
                        <td>{description}</td>
                        <td>{quantity}</td>
                        <td>{price}</td>
                        <td>{amount}</td>
                      </tr>    
                    </tbody>
                 </React.Fragment>
             ))}
        </table>
        <div>
                 <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">${total.toLocaleString()}</h2>
        </div>
      </>
      
    )
}

