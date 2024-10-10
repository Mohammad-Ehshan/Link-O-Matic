
export const GET= async(req,res)=>{
const url=req.query.url;
console.log({url})
return res.json('ok');
}
