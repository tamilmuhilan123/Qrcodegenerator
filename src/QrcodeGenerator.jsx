import { useState } from "react"
const QrcodeGenerator = () => {
    const [img,setImg]=useState("")
    const [loading,setLoading]=useState(false)
    const [qrData,setQrData]=useState("")
    const [qrSize,setQrSize]=useState("")
    async function generateQr(){
        setLoading(true)
        try {
            const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
            setImg(url)
        } catch (error) {
            console.log("Error in Qrfetching",error)
        }
        finally{
            setLoading(false)
        }
    }
    function downloadQr(){
        fetch(img)
        .then((Response)=>Response.blob())
        .then((blob)=>{
            const link=document.createElement("a");
            link.href=URL.createObjectURL(blob);
            link.download="qrcode.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }).catch((error)=>{
            console.log("Error in downloading qrcode",error)
        })
    }
  return (
    <div className='body'>
        <div className='subbody'>
            <div className="heading">
                <p>Qrcode Generator</p>
            </div>
            <div className='qrgenerator'>
                {img && <img src={img} alt=""/>}
                {loading && <p>Please wait...</p>}
            </div>
            <div className='inputboxes'>
                <p>Enter your Data</p>
                <input type="text" placeholder='Your URL' onChange={(e)=>setQrData(e.target.value)} required/>
                <p>Enter your img size(eg.,150)</p>
                <input type="text" placeholder='Img size' onChange={(e)=>setQrSize(e.target.value)} required/>
            </div>
            <div className='buttons'>
                <button onClick={generateQr} disabled={loading} className="generate">Generate Qrcode</button>
                <button onClick={downloadQr} className="download">Download Qrcode</button>
            </div>
            <div className='footer'>
                <p>Designed by <a href="https://tamilmuhilan.netlify.app">@TamilMuhilan</a></p>
            </div>
        </div>
    </div>
  )
}

export default QrcodeGenerator
