#!/bin/bash 
nitrogen --restore
mpd
conky | while read -r; do wmfs -s -name "$REPLY"; done
