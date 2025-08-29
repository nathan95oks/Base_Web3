// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract Hola {
    string private saludo = "Hola, mundo";

    function getSaludo() external view returns (string memory) {
        return saludo;
    }

    function setSaludo(string calldata nuevo) external {
        saludo = nuevo;
    }
}
