require('dotenv').config();
const {ethers} = require('ethers');


const provider  = new ethers.providers.JsonRpcBatchProvider('https://mainnet.infura.io/v3/e46efff74c10490ea0af90acef80885b');

const ERC20_ABI =[
    "function name() view returns(String)",
    "function symbol() view returns(String)",
    "function totalSupply() view returns(uint256)",
    "function balanceOf() view returns(uint256)"
]
const address = '0x6B175474E89094C44Da98b954EedeAC495271d0F';

const contract  = new ethers.Contract(address ,ERC20_ABI,provider);
const main =  async()=>{

    const name =await contract.name()
    const symbol = await contract.symbol()
    const totalSupplys = await contract.totalSupply()
    const balance  = await contract.balanceOf(address);

    console.log("name :",name);
    console.log("symbol :",symbol);
    console.log("Yotal supply :",totalSupplys);

    console.log(balance);//Raw balance
    console.log(ethers.utils.formatEther(balance));//formattedd balance
  

}
main()