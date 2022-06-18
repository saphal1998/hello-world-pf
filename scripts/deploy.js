async function main() {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
 
    // Start deployment, returning a promise that resolves to a contract object
    const hello_world = await HelloWorld.deploy("Hello World!");
    console.log("Contract deployed to address:", hello_world.address);
    // 0xA2D0924c85B6e82A9600b0Cc9520E099D1e54921
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });