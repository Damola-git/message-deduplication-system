Implementation Details

Core Logic
Message Queue:A queue is maintained to store messages within a 5-second window.
Deduplication:For each incoming message:
    -Messages older than 5 seconds are removed from the queue.
    -The queue is checked for duplicates by comparing the content property.
Output: If a duplicate is found, the message is marked as "duplicate". Otherwise, it is accepted, and the content is returned.
