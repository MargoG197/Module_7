// Задание 5.

// Переписать консольное приложение из предыдущего юнита на классы.


class ElectroDevices{
    constructor(){
     this.material = 'plastic';
      this.wireLenghts = 1.5  
    }
    
    plugIn(deviceName){
      this.plugFunc = 1;
     return console.log(`${this.plugFunc} means ${deviceName} is pluged in`);
    }
    
    plugOut(deviceName){
      this.plugFunc = 0;
      console.log(`${this.plugFunc} means ${deviceName} is pluged out`)
    }
    
    voltageConsumption(VattPerHour, hours, deviceName){
      const voltageConsumption = VattPerHour * hours
        console.log(`${deviceName} for ${hours} hours consumed ${voltageConsumption} Vatt `)
    }
    }
    
    class BedroomDevices extends ElectroDevices {
      constructor(){
        super()
    this.place = 'bedroom';  
      }
    }
      
   class KitchenDevices extends ElectroDevices {
     constructor(){
       super()
    this.place = 'kitchen';
  }
     }
    
    const computer = new ElectroDevices();
    const mixer = new KitchenDevices()
    
    mixer.function = "to mix ingredients"
    computer.function = "to process entered data"
    computer.plugFunc = 0;
    mixer.plugFunc = 0
    
    computer.plugIn("Laptop")
    mixer.plugOut("Mixer")
    
    computer.voltageConsumption(440, 2, "Laptop")
    mixer.voltageConsumption(150, 0.5, "Mixer")
    
//     console.log(computer)
//     console.log(mixer)
