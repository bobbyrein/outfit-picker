import Image from "next/image"
import { useState } from 'react';


function Clothing({ imageSource, imageAlt, checked, onChange }) {

    return <>
        <div
            class="grid h-64 card bg-base-300 rounded-box relative">
            <Image
                src={imageSource}
                alt={imageAlt}
                layout="fill">
            </Image>
            <label class="label cursor-pointer">
                <input
                    type="checkbox"
                    checked={checked}
                    class="checkbox checkbox-primary absolute right-1 top-1"
                    onChange={onChange}

                />
            </label>
        </div>
    </>
}

export default Clothing