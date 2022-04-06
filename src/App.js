import {useState, useRef } from "react"
import ClientDetails from "./components/ClientDetails"
import Footer from "./components/Footer"
import Notes from "./components/Notes"
import Table from "./components/Table"
import MainDetails from "./components/MainDetails"
import Dates from "./components/Dates"
import Header from "./components/Header"
import PaymentStatus from "./components/PaymentStatus"
import TableForm from "./components/TableForm"
import ReactToPrint from "react-to-print"

function App() {
  const [showInvoice, setShowInvoice] = useState(true)
  const [name, setName] = useState("Supplier")
  const [address, setAddress] = useState("32 Mount Drive, Salem, CA ")
  const [email, setEmail] = useState("xyz@gmail.com")
  const [phone, setPhone] = useState("910 123 4567")
  const [website, setWebsite] = useState("example.com")
  const [clientName, setClientName] = useState("Reshma")
  const [clientAddress, setClientAddress] = useState("Dallas, Texas")
  const [invoiceNumber, setInvoiceNumber] = useState("98765")
  const [invoiceDate, setInvoiceDate] = useState("04/01/2022")
  const [notes, setNotes] = useState("Payment accepted by cash/cheque/credit card. Checks payable to MARKET ACCESS DIRECT")
  const [paymentStatus, setPaymentStatus] = useState("Paid")
  const [description,setDescription] = useState("")
  const [quantity,setQuantity] = useState("")
  const [price,setPrice] = useState("")
  const [amount,setAmount] = useState("")
  const [list, setList] = useState([])
  const [total, setTotal] = useState(0)

  const componentRef = useRef()

  const handlePrint = () =>{
        window.print()
    }
  return(
    <>
      <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
        
        {showInvoice ? (
          <>
            <ReactToPrint trigger = {() => <button className="bg-blue-500 mb-5 text-white 
                font-bold py-2 px-8 ml-5 rounded shadow
                border-2 border-gray-500
                hover:bg-transparent hover:text-blue-500
                transition-all duration-300">Print</button>}
                content={() => componentRef.current}/>

             <button className="bg-blue-500 mb-5 text-white 
                font-bold py-2 px-8 rounded shadow
                border-2 border-gray-500
                hover:bg-transparent hover:text-blue-500
                transition-all duration-300">Send Email</button>

          <div ref ={componentRef} className="p-5">
            <Header handlePrint = {handlePrint}/>
            <MainDetails 
              name={name} 
              address={address} 
            />
            
            <ClientDetails 
              clientName={clientName} 
              clientAddress={clientAddress}
            />
            
            <Dates 
              invoiceNumber={invoiceNumber} 
              invoiceDate={invoiceDate} 
            />
            <Table
              description ={description}
              quantity ={quantity}
              price ={price}
              amount ={amount}
              list = {list}
              setList = {setList}
              total = {total}
              setTotal={setTotal}
            />
            <PaymentStatus paymentStatus={paymentStatus}/>
            
            <Notes notes={notes}/>
            <Footer 
              name={name} 
              address={address} 
              website={website} 
              email={email}
              phone={phone}
              />
        </div> 
          <button onClick={() => setShowInvoice(false)}
            className="mt-5 bg-blue-500 text-white 
            font-bold py-2 px-8 rounded shadow
            border-2 border-blue-500
            hover:bg-transparent hover:text-blue-500
            transition-all duration-300"
          >
          Edit Information
          </button> 
        </>
        
        ) : (
          <>
          {/* name, address, email, phone, bank name, bank account number, website, 
           client name, client address, invoice number, invoice date, due date, notes */}
            <div className="flex flex-col justify-center">
              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col justify-center">
                  <label htmlFor="name">Enter Supplier name</label>
                    <input  
                      type="text" 
                      name="text" 
                      id="name" 
                      placeholder="Enter Supplier Full Name"
                      autoComplete="off"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="flex flex-col justify-center">
                  <label htmlFor="address">Enter Supplier address</label>
                    <input 
                      type="text" 
                      name="text" 
                      id="address" 
                      placeholder="Enter Supplier Address"
                      autoComplete="off"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />  
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="email">Enter Supplier email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Enter Supplier Email"
                        autoComplete="off"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />  
                </div>
                  
                <div className="flex flex-col">
                  <label htmlFor="website">Enter Supplier Website</label>
                    <input 
                      type="url" 
                      name="website" 
                      id="website" 
                      placeholder="Enter Supplier Website"
                      autoComplete="off"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                    />  
                </div>

                <div className="flex flex-col">
                  <label htmlFor="phone">Enter Supplier Phone</label>
                    <input 
                      type="phone" 
                      name="phone" 
                      id="phone" 
                      placeholder="Enter Supplier Phone Number"
                      autoComplete="off"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />  
                </div>
              </article> 
              <article className="md:grid grid-cols-2 gap-10 md:mt-16"> 
                <div className="flex flex-col">
                  <label htmlFor="clientName">Enter Customer Name</label>
                    <input 
                      type="text" 
                      name="clientName" 
                      id="clientName" 
                      placeholder="Enter Customer Name"
                      autoComplete="off"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                    />         
                </div>
                <div className="flex flex-col">
                  <label htmlFor="clientAddress">Enter Customer Address</label>
                    <input 
                      type="text" 
                      name="clientAddress" 
                      id="clientAddress" 
                      placeholder="Enter Customer Address"
                      autoComplete="off"
                      value={clientAddress}
                      onChange={(e) => setClientAddress(e.target.value)}
                    />         
                </div>
              </article>
              
              <article className="md:grid grid-cols-3 gap-10">  
                <div className="flex flex-col">
                  <label htmlFor="invoiceNumber">Enter Invoice Number</label>
                    <input 
                      type="text" 
                      name="invoiceNumber" 
                      id="invoiceNumber" 
                      placeholder="Enter Invoice Number"
                      autoComplete="off"
                      value={invoiceNumber}
                      onChange={(e) => setInvoiceNumber(e.target.value)}
                    />         
                </div>
                <div className="flex flex-col">
                  <label htmlFor="invoiceDate">Enter Invoice Date</label>
                    <input 
                      type="date" 
                      name="invoiceDate" 
                      id="invoiceDate" 
                      placeholder="Enter Invoice Date"
                      autoComplete="off"
                      value={invoiceDate}
                      onChange={(e) => setInvoiceDate(e.target.value)}
                    />         
                </div>
              </article>
            
              <div className="flex flex-col">
                  <label htmlFor="paymentStatus">Enter Payment Status</label>
                    <input 
                      type="text" 
                      name="paymentStatus" 
                      id="paymentStatus" 
                      placeholder="Enter Payment Status"
                      autoComplete="off"
                      value={paymentStatus}
                      onChange={(e) => setPaymentStatus(e.target.value)}
                    />         
                </div>

              {/* This is our table form */}
              <article>
                <TableForm 
                description={description} 
                setDescription={setDescription}
                quantity={quantity} 
                setQuantity={setQuantity}
                price={price} 
                setPrice={setPrice}
                amount={amount} 
                setAmount={setAmount}
                list = {list}
                setList={setList}
                total = {total}
                setTotal={setTotal}
                />
              </article>
                <label htmlFor="notes">Notes</label>
                <textarea name="notes" id="notes" col="30" rows="3" placeholder="Additional Notes to the client" value ={notes} 
                onChange={(e) => setNotes(e.target.value)}></textarea>
          
                <button onClick={() => setShowInvoice(true)}
                className="bg-blue-500 text-white 
                font-bold py-2 px-8 rounded shadow
                border-2 border-blue-500
                hover:bg-transparent hover:text-blue-500
                transition-all duration-300"
                >
                  Create Invoice
                </button>
             </div>
          </>  
        )}
      </main>
   </>
  )
}

export default App;
