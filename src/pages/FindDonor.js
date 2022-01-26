import React from "react";
import NavBar from "../components/NavBar/NavBar";
import BloodGroups from "../components/BloodGroups/BloodGroups";
import SearchBox from "../components/SearchBox/SearchBox";
import Table from "../components/Table/Table";
import Copyright from "../components/Copyright/Copyright";
import { useEffect, useState } from "react";

import { db } from "../firebase";
import {collection,getDocs} from 'firebase/firestore'

function FindDonor() {
  const [searchName, setSearchName] = useState("");
  const [active, setactive] = useState(0);
  const [donorList, setdonorList] = useState([]);
  const [tableList, setTableList] = useState([]);
  


  useEffect(() => {
    window.scrollTo(0, 0);

    getDocs(collection(db,"donors")).then(snap=>{
      setdonorList(snap.docs.map((doc)=> ({...doc.data(),id:doc.id})))
    })    
  }, []);

  useEffect(()=>{
    setTableList(donorList)
  },[donorList])
  
 

  function handleDonorList(searchName,active) {
    setTableList(
      donorList.filter((donor, index) => {
        if (
          donor.name
            .toLocaleLowerCase()
            .startsWith(searchName.toLocaleLowerCase())
        ) {
          if (active) {
            if (donor.blood === active) {
              return true;
            } else {
              return false;
            }
          } else {
            return true;
          }
        } else {
          return false;
        }
      })
    );
  }

  function handleSearch(input) {
    setSearchName(input);
    handleDonorList(input,active);
  }

  function getActive(active) {
    setactive(active);
    handleDonorList(searchName,active);
  }

  return (
    <div>
      <NavBar />
      <BloodGroups setActive={getActive} />
      <SearchBox onChange={handleSearch} />
      <Table donors={tableList} />
      <Copyright />
    </div>
  );
}

export default FindDonor;
