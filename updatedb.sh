#!/bin/bash

# Run collection script
cd /partner-engineering/src/pe_tools/collection_stat/; /usr/bin/python3.10 ah_statistics.py;

/usr/bin/python3.10 /sync-script.py
