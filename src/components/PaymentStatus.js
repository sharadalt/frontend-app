export default function PaymentStatus({paymentStatus}) {
    return (
        <>
          <section className="mb-5 mt-5">
          <h2 className="flex items-end justify-end font-bold text-xl uppercase  md:text-4xl mb-1" style={{ color: "blue" }}>{paymentStatus}</h2>
          </section>
        </>
    )
}


