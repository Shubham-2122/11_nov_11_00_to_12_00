import React, { useEffect, useState } from 'react'
import MyContext from './MyContext'
import { QuerySnapshot, Timestamp, addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
import { fireDb } from '../../Firebase/firbase';

function MyState(props) {
    
    const [products, setProducts] = useState({
        title: "",
        price: "",
        imageUrl: "",
        category: "",
        time: Timestamp.now(),
        date: new Date().toLocaleString(
            "en-US",
            {
                month: "short",
                day: "2-digit",
                year: "numeric",
            }
        )
    });

    // add Product Function

    const addProduct = async () => {
        // validtion
        if (products.title == "" || products.price == "" || products.imageUrl == "" || products.category == "") {
            return alert("all Fields are required")
        }

        // product refrence
        // collection add karva fireDb mathi and collection name
        const ProductRef = collection(fireDb,"products")

        try {

            // productred , usestate to products
            await addDoc(ProductRef, products);
            getProducts();
            alert("products added successfully");
            setTimeout(()=>{
                window.location.href = "/"
            },800)
            setProducts("");
            
        } catch (error) {
            console.log(error)   
        }
    }

    // get products data

    const [allProducts, setAllProducts] = useState([]);

    const getProducts = async () =>{
        try {
            const q = query(
                collection(fireDb, 'products'),
                orderBy('time')
            )

            const data = onSnapshot(q,(QuerySnapshot)=>{
                let productArray = [];
                QuerySnapshot.forEach((doc)=>{
                    // data and id
                    productArray.push({...doc.data(), id: doc.id})
                })
                setAllProducts(productArray)
            })

            return () => data;
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getProducts();
    },[])



// update product 

    // allproduct item aayega
    const editProducthandle = (item)=>{
        setProducts(item)
    }

    // edit handle function

    const editProducts = async (item)=> {
        try {
            // setdoc data aayega usko change karege
            
            await setDoc(doc(fireDb, 'products',products.id) ,products)
            getProducts();
            alert("product update successFully");
            setTimeout(()=>{
                window.location.href = "/"
            },800)
            setProducts("")
        } catch (error) {
            console.log(error)
        }
    }


// delete function
    const deleteProduct = async (item) =>{
        try {
            // deletdoc method use doc (dirdb,collection,item.id)
            await deleteDoc(doc(fireDb, "products", item.id))
            getProducts();
            alert("Product deleted Successfully");

        } catch (error) {
            console.log(error)
        }
    }

    // Serch funclity
    const [Serach,setsaerch] = useState("")

    return (
        <MyContext.Provider value={{ products ,setProducts ,addProduct,getProducts,allProducts,editProducthandle,editProducts,deleteProduct,Serach,setsaerch  }}>
            {props.children}
        </MyContext.Provider>
    )
}

export default MyState;
