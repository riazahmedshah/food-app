

export interface resDataProps{
    cloudinaryImageId:string
    name:string;
    cuisines:string[];
    avgRatingString:string;
    areaName:string;
}

export interface resProps{
        info : {
            id:string,
            name:string,
            cloudinaryImageId:string,
            cuisines:string[],
            avgRatingString:string,
            areaName:string
        }
}

export interface ResInfoProps{
    name:string;
    cuisines:string[];
    locality:string;
    city:string;
    avgRatingString:string;
}

// export interface ResInfoProps{
//         name: string;
//         cuisines: string[];
//         locality:string;
//         city:string;
//         avgRatingString:string;
// }

export interface ResMenuProps{
    title:string;
    itemCards: [
       {card:{
           info:{
               id:string;
               name:string;
               price:number;
               ratings:{
                   aggregatedRating:{
                       rating:string;
                   }
               };
               description:string;
               imageId:string;


           }
       }}
    ];
    showItems:boolean;
    setShowIndex: () => void
}

export interface itemListProps{
    data:[
        {card:{
            info:{
                id:string;
                name:string;
                price:number;
                ratings:{
                    aggregatedRating:{
                        rating:string;
                    }
                };
                description:string;
                imageId:string;
            }
        }}
    ]
}


export interface ItemInfo {
    id: string;
    name: string;
    price: number;
    ratings: {
      aggregatedRating: {
        rating: string;
      };
    };
    description: string;
    imageId: string;
  }
  
  export interface ItemList {
    card: {
      info: ItemInfo;
    };
  }
  
  export type CartState = ItemList[];
  