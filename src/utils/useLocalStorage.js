import { useState, useEffect } from "react";

function getStorageValue (key, defaultValue) {
    //getting storage value
    const saved = localStorage.getItem(key);
    const initial = JSON.parse(saved);
    return initial || defaultValue;
}