// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CertificateStorage {
    struct Certificate {
        string certificateNumber;
        uint256 timestamp;
    }

    mapping(address => Certificate[]) private userCertificates;

    event CertificateStored(address indexed user, string certificateNumber, uint256 timestamp);

    function storeCertificate(string memory certificateNumber) external {
        Certificate memory newCertificate = Certificate(certificateNumber, block.timestamp);
        userCertificates[msg.sender].push(newCertificate);
        emit CertificateStored(msg.sender, certificateNumber, block.timestamp);
    }

    function getCertificatesCount() external view returns (uint256) {
        return userCertificates[msg.sender].length;
    }

    function getCertificate(uint256 index) external view returns (string memory, uint256) {
        require(index < userCertificates[msg.sender].length, "Certificate does not exist");
        Certificate memory cert = userCertificates[msg.sender][index];
        return (cert.certificateNumber, cert.timestamp);
    }
}
