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
    static addMember(name,skills, background){
        return axios.post(url, {
            name, 
            skills,
            background
        })
    }

    //delete members
    static deleteMember(id){
        return axios.delete(`${url}${id}`)  
    }

    

    //view member information
    static viewMember(memberID){
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(`${url}${memberID}`);
                const data = res.data;
                console.log(data)
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
}

export default memberService;