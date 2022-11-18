import Image from "next/image"
import { useState } from 'react';


function ClothingWOCheck({ imageSource, imageAlt, checked, onChange, clothing }) {

    return <>
        <div
            class="grid h-64 card bg-base-300 rounded-box relative">
            <Image
                src={clothing.medias.edges[0].node.mediaUrl}
                alt={imageAlt}
                layout="fill">
            </Image>
        </div>
    </>
}

export default ClothingWOCheck