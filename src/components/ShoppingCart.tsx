import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ItemData } from "@/types/page"

const payhandler = () =>{
        fetch(import.meta.env.VITE_SERVER_BASE_URL + "/pay/checkout/hosted", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                // items: props.data.map(elem => ({name: elem.name, id: elem.id})),
                customerName: "people1",
                // customerEmail: email,
            })
        })
        .then(r => r.text())
        .then(r => {
            window.location.href = r
        })
    }

function ShoppingCart(props:ItemData) {
    return (
        <>
            <Card className="w-[350px]">
            <CardHeader>
            <CardTitle>Product Name = {props.name}</CardTitle>
            <CardDescription>You are going to bought following</CardDescription>
            </CardHeader>
            <CardContent>
            <form>
                <div className="grid w-full items-center gap-4">
                <div className="flex flex-row justify-between">
                    <span>Items - {props.name}</span> 
                    <span>Price - {props.price}</span>   
                </div>           
                </div>
            </form>
            </CardContent>
            <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button onClick={payhandler}>Checkout</Button>
            </CardFooter>
        </Card>
    </>    
  )
}

export default ShoppingCart