import React, { useEffect, useRef } from 'react'

const CustomCursor = () => {
    const CursorRef = useRef(null)

    useEffect(()=>{
        const Cursor = CursorRef.current;
        if (!Cursor);

        const MoveCursor = (e) => {
            Cursor.style.left = `${e.clientX}px`;
            Cursor.style.top = `${e.clientY}px`;
        }

        const addHoverClass = () => cursor.classList.add('cursor-hover');
        const removeHoverClass = () => cursor.classList.remove('cursor-hover');

        document.addEventListener('mousemove', MoveCursor);

        const interactiveElements = document.querySelectorAll('a, button, .project-row');
        interactiveElements.forEach((el) => {
            el.addEventListener('mouseenter', addHoverClass);
            el.addEventListener('mouseleave', removeHoverClass);
        });

        return () => {
            document.removeEventListener('mousemove', MoveCursor);
            interactiveElements.forEach((el) => {
                el.removeEventListener('mouseenter', addHoverClass);
                el.removeEventListener('mouseleave', removeHoverClass);
            });
        };
    }, []);
    
  return (
    <div className='custom-cursor hidden md:block' id='cursor' ref={CursorRef}>

    </div>
  )
}

export default CustomCursor
