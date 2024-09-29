import React from "react";

export const ElementsType = "TextField";

export const SlideElement = {
    type : ElementsType,
    designerComponent : React.FC,
    slideComponent : React.FC,
    propertiesComponent : React.FC,
} 

const SlideElementsType = {
    [key in ElementsType] : SlideElement,
}

export const SlideElements = {};