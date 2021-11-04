// Задание 4.
// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 
// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.
// План:
// Определить родительскую функцию с методами, которые включают/выключают прибор из розетки;
// Создать делегирующую связь [[Prototype]] для двух конкретных приборов;
// У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов;
// Создать экземпляры каждого прибора;
// Вывести в консоль и посмотреть результаты работы, гордиться собой :)

function ElectroDevices(){
    this.material = 'plactic',
    this.wireLenghts = 1.5  
  }
  
  function BedroomDevices(){
    this.place = 'bedroom'
  }
  
  BedroomDevices.prototype = new ElectroDevices()
  
  function KitchenDevices(){
    this.place = 'kitchen'
   }
  
  KitchenDevices.prototype = new ElectroDevices()
  
  ElectroDevices.prototype.plugIn = function(deviceName){
    this.plugFunc = 1;
    console.log(`${this.plugFunc} means ${deviceName} is pluged in`)
  }
  
  ElectroDevices.prototype.plugOut = function(deviceName){
    this.plugFunc = 0;
    console.log(`${this.plugFunc} means ${deviceName} is pluged out`)
  }
  
  ElectroDevices.prototype.voltageConsumption = function(VattPerHour, hours, deviceName){
    const voltageConsumption = VattPerHour * hours
      console.log(`${deviceName} for ${hours} hours consumed ${voltageConsumption} Vatt `)
  }
  
  const computer = new BedroomDevices()
  const mixer = new KitchenDevices()
  
  mixer.function = "to mix ingredients";
  computer.function = "to process entered data";
  computer.plugFunc = 0;
  mixer.plugFunc = 0;
  
  computer.plugIn("Laptop")
  mixer.plugOut("Mixer")
  
  computer.voltageConsumption(440, 2, "Laptop")
  mixer.voltageConsumption(150, 0.5, "Mixer")
  
  // console.log(computer)
  // console.log(mixer)
  