function Computer(ram, cpu, storage){
this.ram = ram;
this.cpu = cpu;
this.storage = storage;
}

function Laptop(battery){
this.battery = battery;
}

Computer.prototype.runProgram=function(program){
	console.log('running: ' + program);
}

Laptop.__proto__=Computer;
Laptop.prototype.carryAround()=function(){
	console.log("carrying laptop:  cpu" + cpu +" ram: " + ram + " storage: " + storage + " battery: " + battery);
}