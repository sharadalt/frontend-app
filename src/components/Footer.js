export default function Footer({name, address,  website, email, phone, bankAccount, bankName}){
    return(
        <>
            <footer className="footer border-t-2 border-gray-300 pt-5">
            <ul className="flex flex-wrap items-center justify-center">
            <li>
                <span className="font-bold">Name:</span> {name}
            </li>
            
            <li>
                <span className="font-bold">Address:</span> {address}
            </li>
            <li>
                <span className="font-bold">Email:</span> {email}
            </li>
            <li>
                <span className="font-bold">Phone Number:</span> {phone}
            </li>
            <li>
                <span className="font-bold">Website:</span> <a href={website}>website.com</a>
            </li>
            </ul>
            </footer>
        </>
    )
}