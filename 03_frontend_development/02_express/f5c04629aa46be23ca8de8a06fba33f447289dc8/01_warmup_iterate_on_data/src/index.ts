// Code here

type CustomerType={
id: number,
first_name: string,
last_name: string,
email:string,
gender:string,

}


function getEmails(data:CustomerType[]):string[]{
  console.log({data})
  console.log()
  const email:string[] = data.map(x => x.email)
  return email

}

export { getEmails }
