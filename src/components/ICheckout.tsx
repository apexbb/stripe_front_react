function ICheckout() {
  const Products = [
    {
        description: "Premium Shoes",
        image: "https://source.unsplash.com/NUoPWImmjCU",
        name: "Puma Shoes",
        price: 20,
        quantity: 1,
        id: "shoe"
    }]
  
    const payhandler:any = () => {
    fetch(import.meta.env.VITE_SERVER_BASE_URL + "/pay/checkout/hosted", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          // items: props.data.map(elem => ({name: elem.name, id: elem.id})),
          customerName: "name",
          // customerEmail: email,
      })
    })
    
    .then(r => r.text())
    .then(r => {
        window.location.href = r
    })
  }
  return (
    <>
      <div>
        <h3>
          <title>Buy cool new product</title>
        </h3>
        <div>IntegratedCheckout</div>
      </div>
      <div onClick={payhandler} className="cursor-pointer">Pay</div>
    </>
  )
}

export default ICheckout