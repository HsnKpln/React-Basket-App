import React from 'react'

function DeleteIcons(props) {
  return (
    <svg width={props?.size || 64} height={props?.size || 64} viewBox="0 0 64 64" fill={props?.color || "none"} xmlns="http://www.w3.org/2000/svg">
    <path fill={props?.color || "#134563"} d="M24.5 22.9H27.5V46.9H24.5V22.9Z" />
    <path fill={props?.color || "#134563"} d="M30.5 22.9H33.5V46.9H30.5V22.9Z" />
    <path fill={props?.color || "#134563"} d="M36.5 22.9H39.5V46.9H36.5V22.9Z" />
    <path fill={props?.color || "#134563"} d="M12.5 13.9H51.5V16.9H12.5V13.9Z" />
    <path fill={props?.color || "#134563"} d="M39.4 15.4H36.6V12.4C36.6 11.5 35.9 10.8 35 10.8H29C28.1 10.8 27.4 11.5 27.4 12.4V15.4H24.6V12.4C24.6 9.99999 26.6 8 29 8H35C37.4 8 39.4 9.99999 39.4 12.4V15.4Z" />
    <path fill={props?.color || "#134563"} d="M41 55.9H23C20.6 55.9 18.5 53.9 18.3 51.5L15.5 15.5L18.5 15.3L21.3 51.3C21.4 52.2 22.2 52.9 23 52.9H41C41.9 52.9 42.7 52.1 42.7 51.3L45.5 15.3L48.5 15.5L45.7 51.5C45.5 54 43.4 55.9 41 55.9Z" />
    </svg>
  )
}

export default DeleteIcons