type Profile = {
  name: string;
  age: number;
  country: string;
  haveTraveled: boolean;
};

export function assembleData(usersname: string[], usersage : number[] ,userscountry: string[], haveusersTraveled: boolean[]): Profile[] {
  let i = 0
  const ProfileList: Profile[] = []
  usersage.forEach((element) => {const Profile = {
    name: usersname[i],
    age: usersage[i],
    country: userscountry[i],
    haveTraveled: haveusersTraveled[i]
  };
  i++;
  ProfileList.push(Profile)
})
return ProfileList
}
