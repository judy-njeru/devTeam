import axios from 'axios';

const url = 'http://localhost:3000/apis/members/';

class memberService {
    //get members
    static getMembers(){ 
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(member => ({
                        ...member,
                        createdAt: new Date(member.createdAt)
                    }))
                );
            }catch(err){
                reject(err);
            }
        })
    }

    //add members
    static addMember(text){
        return axios.post(url,{
            text
        })  
    }

    //delete members
    static deleteMember(id){
        return axios.delete(`${url}${id}`)  
    }
}

export default memberService;