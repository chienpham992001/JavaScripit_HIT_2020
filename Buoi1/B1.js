const listPersons = [
    { name: "Hoàng Duy Khánh", age: 18, gender: "nam" },
    { name: "Lê Văn Nam", age: 60, gender: "nam" },
    { name: "Trần Chiến Công", age: 8, gender: "nam" },
    { name: "Bùi Việt Hoàng", age: 22, gender: "nam" },
    { name: "Phạm Minh Chiến", age: 16, gender: "nam" },
    { name: "Ngô Thị Thanh Tình", age: 45, gender: "nữ" },
    { name: "Nguyễn Mai Hường", age: 8, gender: "nữ" },
    { name: "Hà Văn Phòng", age: 30, gender: "nam" },
    { name: "Nguyễn Mai Phương", age: 14, gender: "nữ" },
    { name: "Lê Văn Hà", age: 55, gender: "nam" },
  ];
  function countPersonByGender(listPersons, gender) {
    let count=0;
    for(var i in listPersons){
        if(listPersons[i].gender==gender) {
            count++
        }
    }
    return count;
  }
  
  function statisticsByAge(listPerson) {
      let  statistics = {
          treCon:0,
          thanhNien:0,
          nguoiGia:0
      }
      for(var i in listPersons){
          if(listPersons[i].age<18) statistics.treCon++
          else if(listPersons[i].age>=18 && listPersons[i].age<30) statistics.thanhNien++
          else statistics.nguoiGia++
      }
      return statistics
  }
  function main() {
    console.log(`Có ${countPersonByGender(listPersons,'nam')} nam`);
    console.log(`Có ${countPersonByGender(listPersons,'nữ')} nữ`);
    console.log(statisticsByAge(listPersons));
  }
  
  main();