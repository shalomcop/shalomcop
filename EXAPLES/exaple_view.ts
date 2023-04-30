function renderApartment(indexStart:number, indexEnd:number):void{
    try {
        if (!ApartmentProfil || !Array.isArray(apartmentProfils))
          throw new Error("Items is not an array");

          let tempApartmentProfiles:ApartmentProfil[] = []

          for(let i = indexStart; i < indexEnd; i++){
            tempApartmentProfiles.push(apartmentProfils[i])
          }
      
        const html = tempApartmentProfiles
           .map((apartments) => {
            return `
            <div class="boxMain__container__boxes apartmentDiv apartment__container" onclick="handleShowApartment('${apartments.uid}')">
            <img class="boxMain__container__boxes__img"
             src= ${apartments.apartmentImage} alt="roommate Img">
            <h4>${apartments.city}</h4>
            <p>Rooms: ${apartments.rooms}</p>
            <p>Floor: ${apartments.floor}</p>
            <p>Price: ${apartments.price} NIS</p>
            </div>
            `;
          })
          .join(" ");
        // console.log(`htmlApartments ${html}`);
        const element = document.querySelector(".apartments");
        if (!element) throw new Error("Couldnt find element in the DOM");
        element.innerHTML = html;
      } catch (error) {
        console.error(error);
      }
}