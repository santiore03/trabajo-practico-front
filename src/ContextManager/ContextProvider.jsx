import React,{createContext,useContext, useState} from 'react'

import Image1 from '../assets/Image1.png' 
import Image2 from '../assets/Image2.png' 
import Image3 from '../assets/Image3.png' 
import Image4 from '../assets/Image4.png' 
import Image5 from '../assets/Image5.png' 
import Image6 from '../assets/Image6.png' 

const Context = createContext()

const ContextProvider = ({children}) => {
    const products =[
      {
        nombre: 'Samsung Galaxy S22',
        precio: 348000,
        id: 1,
        stock: 10,
        descripcion: 'Celular. Pantalla 6.4" Dynamic AMOLED 2X. Procesador: Octa core. Resolucion: 2340 x 1080 FHD+. Camara: 50.0 MP + 10.0 MP + 12.0 MP. Frontal: 10 MP. Sistema operativo Android. Almacemamiento: 256 Gb. RAM: 8 Gb. Video 4k. WIFI. USB. NFC. GPS. Navegador Chrome. Bateria: 4500 mAh. Bluetooth.',
        categoria: 'CEL PHONES',
        imagen: <img src={Image1} style={{backgroundColor: 'white'}}/>
      },
      {
        nombre: 'Samsung Galaxy S10',
        precio: 230000,
        id: 2,
        stock: 8,
        descripcion: 'Celular. Pantalla Super AMOLED de 6.5". Procesador: Octa-Core 2.8GHz, 2.4GHz, 1.8GHz. Bateria: 4,500mAh / 25W Fast Charging. Camara: 12.0 MP + 12.0 MP + 8.0 MP. Camara Frontal: 32.0 MP. Optical Zoom at 3x , Digital Zoom up to 30x. NFC. USB. WIFI. Micro SD. Bluetooth. Almacenamiento: 128 Gb. RAM: 6 Gb. 5G. FOD. Galaxy Experience. IP68. Sensores: Acelerometro / Sensor de huellas dactilares / Sensor giroscopico / Sensor geomagnetico / Sensor Hall / Sensor de luz RGB / Deteccion de proximidad virtual.',
        categoria:'CEL PHONES',
        imagen: <img src={Image2} style={{backgroundColor: 'white'}}/>
      },
      {
        nombre: 'Monitor curvo Samsung',
        precio: 94000,
        id: 3,
        stock: 8,
        descripcion: 'Este monitor de 24" te va a resultar cómodo para estudiar trabajar o ver una película en tus tiempos de ocio. Asimismo su resolución de 1920 x 1080 te permite disfrutar de momentos únicos gracias a una imagen de alta fidelidad. Su tiempo de respuesta de 5 ms lo hace ideal para gamers y cinéfilos porque es capaz de mostrar imágenes en movimiento sin halos o bordes borrosos.',
        categoria: 'MONITORS',
        imagen: <img src={Image3} style={{backgroundColor: 'white'}}/>
      },
      {
        nombre: 'SmartWatch X-VIEW Q5',
        precio: 32000,
        id: 4,
        stock: 8,
        descripcion: 'Reloj Smart. Compatible con Android & iOS. Chip RTL8762DT + AC6956. Display 1.3 Touch AMOLED / 360 x 360 px. RAM 256 kb / ROM 128 MB. Conexion Bluetooth v5.0. IP67 Water resistance. Bateria de 250 mAh. Autonomia de 5-7 dias. Metal frame. Boton mecanico lateral. Carga USB (cable magnetico 2 pines). Recibi notificaciones. Atende y realiza de llamadas. Medidor de pulsaciones. Medidor de oxigeno en sangre. Podometro: distancia recorrida. Monitor de sueno. Recordatorio de sedentarismo. Control remoto de reproductor. Control remoto de camara.',
        categoria: 'SMARTWATCHES',
        imagen: <img src={Image4} style={{backgroundColor: 'white'}}/>
      },
      {
        nombre: 'SmartWatch SMA M4',
        precio: 45000,
        id: 5,
        stock: 8,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil debitis adipisci doloruReloj smart. Pantalla de 1.43", AMOLED HD, Resolucion 466 x 466 px. Conectividad: Bluetooth 5.2. Wi Fi IEEE 802.11b/ g/ n 2.4GHz. Sensores: Acelerometro, Gyroscpoe, Electronic compass. Barometro. Sensor de luz. Bateria de 470 mAh. Sistema requeridos Android 6.0 o posterior. iOS 10.0 o posterior. Dual band GPS. NFC. Material TPU/silicona. Microfono para llamadas via BT.',
        categoria: 'SMARTWATCHES',
        imagen: <img src={Image5} style={{backgroundColor: 'white'}}/>
      },
      {
        nombre: 'Motorola Moto EDGE 30',
        precio: 150000,
        id: 6,
        stock: 8,
        descripcion: 'Celular. Pantalla de 6.28" pOLED (20:9). Resolucion 1080 x 2400, FHD+, 419, M-HiD, 120 Hz. Vidrio de pantalla gorilla glass 3.25D. Procesador Octa Core Qualcomm Snapdragon 695 (2.2GHz). Capacidad 128 Gb / RAM 8 Gb. Camara "Principal: 64MP (81) F1.8Gran angular y macro: 13MP (120) F2.2", digital (8x picture / 6x video) Flash LED / Frontal 32MP (80.53) F2.45. Flash frontal Backlight. Conexiones USB C 2.0. Wi Fi 802.11 a/b/g/n/ac (2.4 y 5GHz). Bluetooth 5.1. NFC. Sistema operativo Android 12. Bateria de 4020 mAh. Sensores: acelerometro. Sensor de proximidad. Brujula (campo magnetico). Giroscopio. Huella dactilar. Luz ambiente. Desbloqueo facial. GPS, AGPS, GLONASS, Galileo.',
        categoria: 'CEL PHONES',
        imagen: <img src={Image6} style={{backgroundColor: 'white'}}/>
      }
      ]
    
      const[userData,setUserData] = useState({})

      const[formUserData,setFormUserData] = useState({
        nombre: '',
        email: '',
        mensaje: ''
      })

      const handleRegisterUser = (evento) =>{
        evento.preventDefault()
        console.log(evento)
        setUserData(formUserData)
        setFormUserData({nombre:'',
        email:'',
        mensaje:''})
      }

      const handleChangeRegisterUser = (evento) =>{
        console.log(evento.target.value)
        console.log(formUserData)
        setFormUserData({...formUserData, [evento.target.name]:evento.target.value})
      }

    const getProductById = (id) =>{
      return products.find(producto=>producto.id === Number(id))
    }

    const getProductCartById = (id) =>{
      return cart.find(producto=>producto.id === Number(id))
    }


    const[cart,setCart] = useState([])
    
    function isInCart(id) {
    return cart.some(producto => producto.id === Number(id))
  }

    const addProductCart = (id,quantity) => {
      if (isInCart(id)) {
        setCart(
          cart.map((product) => {
            if (product.id == id) {
              product.quantity = quantity;
            }
            return product;
          })
        );
      } else {
        setCart([...cart, { ...getProductById(id), quantity: quantity }]);
      }
    }

    const clearCart = () => {
      setCart([])}

    const getTotal = () => {
      let total = 0
      cart.forEach(product => total+=product.precio * product.quantity)
      return total
    } 

    return (
    <Context.Provider value={{products,getProductById,cart,addProductCart,isInCart,getProductCartById,getTotal,formUserData,handleRegisterUser,handleChangeRegisterUser,clearCart}}>
        {children}
    </Context.Provider>
  )
}

export const useCustomContext = () => useContext(Context)
export default ContextProvider