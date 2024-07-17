// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract chai{

    struct Memo{
        string sertifikat;
        string message;
        address from;
    }

    Memo[] memos;
    address payable owner;
    constructor(){
        owner = payable (msg.sender);
    }
    
    function buyChai(string calldata sertifikat,string calldata message) external payable{
        require(msg.value>0,"Please pay more ether");
        owner.transfer(msg.value);
        memos.push(Memo(sertifikat,message,msg.sender));
    }

    function getMemos() public view returns(Memo[] memory){
        return memos;
    }


}