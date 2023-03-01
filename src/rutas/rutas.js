const {Router}=require("express");
const router= Router()

const Quejas =require("./data.json");
console.log(Quejas);

router.get('/', (req, res) => 
    {
        res.json(Quejas);
    }   
); //Muestra todas las quejas que existen

router.get('/:id', (req,res) => {
        const {id}= req.params;
        Quejas.forEach(Queja =>{
            if(Queja.id == id){
                res.json(Queja);
            }
        });

        console.log(id);
}); //Si quieres ver una queja en específico, conociendo su id

router.get('/serv/:Servicio', (req,res) => {
    const {Servicio}= req.params;
    Quejas.forEach(Queja =>{
        if(Queja.Servicio == Servicio){
            res.json(Queja);
        }
    });

    console.log(Servicio);
}); //Si quieres ver las quejas, según el servicio

router.get('/zone/:Zona', (req,res) => {
    const {Zona}= req.params;
    Quejas.forEach(Queja =>{
        if(Queja.Zona == Zona){
            res.json(Queja);
        }
    });

    console.log(Zona);
}); //Si quieres ver las quejas, según la zona

router.post('/', (req, res) => 
    {
        const{Servicio,Colonia,Zona,Queja}=req.body;
        if(Servicio && Colonia && Zona && Queja)
        {
            const id = Quejas.length +1;
            const nuevaqueja = {...req.body,id};
            console.log(nuevaqueja);
            Quejas.push(nuevaqueja);
            res.send(Quejas);
        }
        else
        {
            res.send("Error")
        }
        res.send("ok");
    }   
); //Registra una nueva queja en el servidor

router.delete('/delete', (req,res) => {
    res.send("Queja borrada");
}); //Borrar queja que esta en el servidor


module.exports=router;

