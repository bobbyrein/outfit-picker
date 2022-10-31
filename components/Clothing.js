import Image from "next/image"
import { useState } from 'react';


function Clothing({ imageSource, imageAlt }) {

    const [checked, setChecked] = useState(false);

    return <>
        <div
            class="grid h-64 card bg-base-300 rounded-box relative my-4">
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
                    onChange={() => setChecked(!checked)}

                />
            </label>
        </div>
    </>
}

export default Clothing