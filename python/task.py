import re
from collections import Counter

def top_k_words(text: str, k: int):
    """
    Return top-k most frequent words (case-insensitive).
    Ties: sort alphabetically.
    Ignore non-words.
    """
    if k <= 0:
        return []
 
    words = re.findall(r'\w+', text.lower())
    if not words:
        return []
    counts = Counter(words)

    sorted_words = sorted(counts.items(), key=lambda x: (-x[1], x[0]))
    return [word for word, count in sorted_words[:k]]
